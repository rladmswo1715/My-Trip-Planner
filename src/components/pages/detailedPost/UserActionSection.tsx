import { ICONS } from '@/constants/importImages';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TPlanInfo } from '@/types/responseData/detailedPlan';
import { deleteDibs, postDibs } from '@/apis/plan';
import { useState } from 'react';
import Like from '@/components/common/Icons/Like';
import Dibs from '@/components/common/Icons/Dibs';
import PostUserAction from '@/components/ui/PostUserAction';
import shareButtonClickHandler from '@/utils/shareUtils';
import usePostActionLike from '@/lib/hooks/queries/mutate/usePostActionLike';

interface UserActionSectionProps {
  accessToken: string;
  planId: number;
  socialId: string;
  likeId: number | null;
  bookmarkId: number | null;
  writerId: string;
}

const UserActionSection = ({
  accessToken,
  planId,
  likeId: initialLikeId,
  bookmarkId: initialBookmarkId,
  socialId,
  writerId,
}: UserActionSectionProps) => {
  const queryClient = useQueryClient();
  const [likeId, setLikeId] = useState<number | null>(initialLikeId);
  const [bookmarkId, setBookmarkId] = useState<number | null>(
    initialBookmarkId
  );

  const likeMutation = usePostActionLike<TPlanInfo>({
    pageType: 'plan',
    pageId: planId,
    likeId,
    accessToken,
    setLikeId,
  });

  const dibsMutation = useMutation({
    mutationFn: async (userAction: 'UNDIBS' | 'DIBS') => {
      if (userAction === 'DIBS') {
        await postDibs(planId, accessToken);
      } else {
        await deleteDibs(bookmarkId as number, accessToken);
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
            dibsId: userAction === 'DIBS' ? -1 : null,
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
        setBookmarkId(updatedPlanInfo.bookmarkId);
      }
    },
  });

  const likeButtonClickHandler = () => {
    const userLikeAction = likeId ? 'UNLIKE' : 'LIKE';
    likeMutation.mutate(userLikeAction);
  };

  const dibsButtonClickHandler = () => {
    const userLikeAction = bookmarkId ? 'UNDIBS' : 'DIBS';
    dibsMutation.mutate(userLikeAction);
  };

  const renderActionOptions = [
    {
      key: '좋아요',
      icon: <Like isLiked={!!likeId} />,
      clickHandler: likeButtonClickHandler,
      isLiked: !!likeId,
      isRender: true,
    },
    {
      key: '공유하기',
      image: { src: ICONS.iconShare.src, alt: ICONS.iconShare.alt },
      clickHandler: shareButtonClickHandler,
      isLiked: false,
      isRender: true,
    },
    {
      key: '내 일정에 복사하기',
      image: { src: ICONS.iconCopy.src, alt: ICONS.iconCopy.alt },
      clickHandler: () => console.log('..'),
      isLiked: false,
      isRender: true,
    },
    {
      key: '찜하기',
      icon: <Dibs isLiked={!!bookmarkId} />,
      clickHandler: dibsButtonClickHandler,
      isLiked: !!bookmarkId,
      isRender: socialId !== writerId,
    },
  ];

  return (
    <section className="flex justify-between items-center mt-[6rem] pb-[4rem] border-b border-[#D9D9D9]">
      <PostUserAction pageType="plan" renderOptions={renderActionOptions} />
    </section>
  );
};

export default UserActionSection;
