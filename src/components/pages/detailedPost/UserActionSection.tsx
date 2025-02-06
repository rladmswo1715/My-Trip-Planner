import Image from 'next/image';
import { ICONS } from '@/constants/importImages';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TPlanInfo } from '@/types/responseData/detailedPlan';
import { deleteLike, postLike } from '@/apis/plan';
import cs from 'classnames';
import { useState } from 'react';

interface UserActionSectionProps {
  accessToken: string;
  planId: number;
  likeId: number | null;
}

const shareButtonClickHandler = () => {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert('URL이 복사되었습니다.');
    })
    .catch((err) => {
      alert('URL 복사 실패');
      console.error(err);
    });
};

const UserActionSection = ({
  accessToken,
  planId,
  likeId: initialLikeId,
}: UserActionSectionProps) => {
  const queryClient = useQueryClient();
  const [likeId, setLikeId] = useState<number | null>(initialLikeId);

  const likeMutation = useMutation({
    mutationFn: async (userAction: 'UNLIKE' | 'LIKE') => {
      if (userAction === 'LIKE') {
        await postLike(planId, accessToken);
      } else {
        await deleteLike(likeId as number, accessToken);
      }
    },
    onMutate: async (userAction) => {
      await queryClient.cancelQueries({ queryKey: ['plan', planId, 'info'] });

      const prevLikeStatus = queryClient.getQueryData(['plan', planId, 'info']);

      queryClient.setQueryData(
        ['plan', planId, 'info'],
        (prevData: TPlanInfo) => {
          return {
            ...prevData,
            like: userAction === 'LIKE' ? prevData.like + 1 : prevData.like - 1,
          };
        }
      );

      return { prevLikeStatus };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(
        ['plan', planId, 'info'],
        context?.prevLikeStatus
      );
    },
    onSettled: async () => {
      const updatedPlanInfo = await queryClient.fetchQuery<TPlanInfo>({
        queryKey: ['plan', planId, 'info'],
      });
      if (updatedPlanInfo) {
        setLikeId(updatedPlanInfo.likeId);
      }
    },
  });

  const likeButtonClickHandler = () => {
    const userLikeAction = likeId ? 'UNLIKE' : 'LIKE';
    likeMutation.mutate(userLikeAction);
  };

  const renderActionOptions = [
    {
      key: '좋아요',
      image: { src: ICONS.iconLike.src, alt: ICONS.iconLike.alt },
      clickHandler: likeButtonClickHandler,
      isLiked: !!likeId,
    },
    {
      key: '공유하기',
      image: { src: ICONS.iconShare.src, alt: ICONS.iconShare.alt },
      clickHandler: shareButtonClickHandler,
      isLiked: false,
    },
  ];

  return (
    <section className="flex items-center mt-[6rem] pb-[4rem] border-b border-[#D9D9D9] gap-[3.6rem]">
      {renderActionOptions.map((option) => {
        return (
          <button
            type="button"
            key={option.key}
            className={cs('flex items-center gap-[1.6rem]', {
              'text-red-500': option.isLiked,
            })}
            onClick={option.clickHandler}
          >
            <Image
              src={option.image.src}
              alt={option.image.alt}
              width={36}
              height={36}
            />
            <span className="text-[2rem] font-semibold leading-[2.387rem]">
              {option.key}
            </span>
          </button>
        );
      })}
    </section>
  );
};

export default UserActionSection;
