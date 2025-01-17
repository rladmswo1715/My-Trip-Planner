'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import CommentCard from './CommentCard';
import { TMyComments } from '@/types/responseData/mypage';
import { getMyComments } from '@/apis/mypage';
import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo } from 'react';
import { throttle } from 'lodash';

const MyCommentListSection = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery<
    TMyComments,
    Error,
    InfiniteData<TMyComments>,
    [_1: string, _2: number, _3: { pageType: string }],
    number
  >({
    queryKey: ['userId', 1, { pageType: 'myComments' }],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
      getMyComments(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.currentPage + 1 : undefined,
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchNextPageThrottled = throttle(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, 1000);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPageThrottled();
    }
  }, [inView]);

  const commentFlatMapList = useMemo(() => {
    return data?.pages.flatMap((page) => page.comments) || [];
  }, [data]);

  return (
    <section className="flex flex-col w-full gap-[2.4rem]">
      {commentFlatMapList.map((comment) => {
        return <CommentCard key={comment.commentId} itemData={comment} />;
      })}
      <div ref={ref} className="h-[0.1rem]"></div>
    </section>
  );
};

export default MyCommentListSection;
