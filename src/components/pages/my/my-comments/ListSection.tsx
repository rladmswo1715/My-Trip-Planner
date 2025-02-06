'use client';

import CommentCard from './CommentCard';
import { TMyComments } from '@/types/responseData/mypage';
import { getMyComments } from '@/apis/mypage';
import { useMypagePlannerList } from '@/lib/hooks/useMypagePlannerList';
import Spinner from '@/components/common/Spinner';
import Pagination from '@/components/common/Pagination';

const MyCommentListSection = () => {
  const { data, currentPage, isLoading, isFetching } =
    useMypagePlannerList<TMyComments>({
      fetchPlanners: getMyComments,
      pageType: 'myComments',
    });

  if (isLoading || isFetching) return <Spinner isPageLoading={false} />;

  if (!data?.content || data.content.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-[2rem] font-bold">
        내가 쓴 댓글이 없어요..
      </div>
    );
  }
  return (
    <section className="flex flex-col w-full gap-[2.4rem]">
      {data?.content.map((comment) => {
        return <CommentCard key={comment.commentId} itemData={comment} />;
      })}
      <Pagination
        pageType="my-comment"
        currentPage={currentPage}
        totalPages={data?.totalPages || 1}
      />
    </section>
  );
};

export default MyCommentListSection;
