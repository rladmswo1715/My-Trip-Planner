import { patchToggleStatus } from '@/apis/plan';
import { EStatus } from '@/types/enum';
import { useMutation } from '@tanstack/react-query';
import cs from 'classnames';
import Cookies from 'js-cookie';

type TStatus = 'PUBLIC' | 'PRIVATE';

interface VisibilityProps {
  planId: number;
  status: TStatus;
}

const Visibility = ({ planId, status }: VisibilityProps) => {
  const accessToken = Cookies.get('accessToken') as string;

  const toggleStatusMutation = useMutation({
    mutationFn: (newStatus: TStatus) =>
      patchToggleStatus({ planId, status: newStatus }, accessToken),
    onSuccess: () => {
      // 성공 시 처리하기
      console.log('성공');
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
