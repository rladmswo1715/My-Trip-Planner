import { patchToggleStatus } from '@/apis/plan';
import { EStatus } from '@/types/enum';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import cs from 'classnames';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

type TStatus = 'PUBLIC' | 'PRIVATE';

interface VisibilityProps {
  planId: number;
  status: TStatus;
}

const Visibility = ({ planId, status }: VisibilityProps) => {
  const accessToken = Cookies.get('accessToken') as string;
  const queryClient = useQueryClient();

  const toggleStatusMutation = useMutation({
    mutationFn: (newStatus: TStatus) =>
      patchToggleStatus({ planId, status: newStatus }, accessToken),
    onSuccess: (_, variables) => {
      const statusText = variables === 'PUBLIC' ? '공개' : '비공개';
      toast.success(`게시글이 ${statusText} 상태로 되었습니다.`);
      queryClient.invalidateQueries({ queryKey: ['plan', planId, 'info'] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const handleStatusToggle = (newStatus: TStatus) => {
    if (newStatus !== status) {
      toggleStatusMutation.mutate(newStatus);
    }
  };

  return (
    <div className="flex items-center gap-[1.6rem]">
      {(['PUBLIC', 'PRIVATE'] as TStatus[]).map((key) => (
        <button
          key={key}
          className={cs('leading-[3rem]', {
            'font-semibold leading-[3rem]': status === key,
            'text-black/40 leading-[2.6rem]': status !== key,
          })}
          onClick={() => handleStatusToggle(key)}
        >
          {EStatus[key]}
        </button>
      ))}
    </div>
  );
};

export default Visibility;
