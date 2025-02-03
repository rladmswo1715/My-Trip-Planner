import Pagination from '@/components/common/Pagination';
import CommentTextarea from './CommentTextarea';
import CommentsList from './CommentsList';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPlanComments } from '@/apis/plan';
import Spinner from '@/components/common/Spinner';

interface CommentsSectionProps {
  planId: number;
  accessToken: string;
  socialId: string;
}

const CommentsSection = ({
  planId,
  accessToken,
  socialId,
}: CommentsSectionProps) => {
  const searchParams = useSearchParams();
  const currentPageParam = parseInt(searchParams.get('currentPage') || '1', 10);
  const [currentPage, setCurrentPage] = useState(currentPageParam);
  const commonPageInfoProps = { planId, currentPage };

  const { data, refetch, isLoading, isFetching } = useQuery({
    queryKey: ['plan', planId, 'comments', { currentPage }],
    queryFn: () => getPlanComments(planId, accessToken, currentPage),
  });

  useEffect(() => {
    setCurrentPage(currentPageParam);
  }, [currentPageParam]);

  const renderLoading = (
    <div className="flex justify-center items-center mt-[4rem] min-h-[10rem]">
      <Spinner isPageLoading={false} />
    </div>
  );

  useEffect(() => {
    if (window.location.hash) return;
    // 댓글 페이지이동 시 댓글 섹션으로 이동
    if (data && searchParams.get('currentPage')) {
      const commentSection = document.getElementById('comments-section');
      commentSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [data, searchParams]);

  if (isLoading || isFetching || !data) return renderLoading;

  return (
    <section
      id="comments-section"
      className="flex flex-col mt-[4rem] gap-[4rem]"
    >
      <h3 className="text-[2.4rem] text-black font-semibold leading-[2.88rem]">
        댓글 ({data.totalElements})
      </h3>

      <CommentTextarea
        accessToken={accessToken}
        refetch={refetch}
        {...commonPageInfoProps}
      />
      <CommentsList
        listData={data.content}
        accessToken={accessToken}
        socialId={socialId}
        {...commonPageInfoProps}
      />
      <Pagination
        totalPages={data.totalPages}
        pageType="plan-comment"
        {...commonPageInfoProps}
      />
    </section>
  );
};

export default CommentsSection;
