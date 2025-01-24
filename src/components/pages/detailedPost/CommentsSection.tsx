'use client';

import Pagination from '@/components/common/Pagination';
import CommentTextarea from './CommentTextarea';
import CommentsList from './CommentsList';

const CommentsSection = () => {
  return (
    <section className="flex flex-col mt-[4rem] gap-[4rem]">
      <h3 className="text-[2.4rem] text-black font-semibold leading-[2.88rem]">
        댓글 (123)
      </h3>

      <CommentTextarea />
      <CommentsList />
      <Pagination currentPage={1} totalPages={4} pageType="my" />
    </section>
  );
};

export default CommentsSection;
