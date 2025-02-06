import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface useMypagePlannerListProps<T> {
  fetchPlanners: (page: number, accessToken: string) => Promise<T>;
  pageType: string;
}

export const useMypagePlannerList = <T>({
  fetchPlanners,
  pageType,
}: useMypagePlannerListProps<T>) => {
  const searchParams = useSearchParams();
  const currentPageParam = parseInt(searchParams.get('currentPage') || '1', 10);
  const [currentPage, setCurrentPage] = useState(currentPageParam);

  const accessToken = Cookies.get('accessToken') as string;

  const { data, refetch, isLoading, isFetching } = useQuery<T, Error>({
    queryKey: ['userId', 'mypage', 1, { pageType, currentPage }],
    queryFn: () => fetchPlanners(currentPage, accessToken),
  });

  useEffect(() => {
    setCurrentPage(currentPageParam);
  }, [currentPageParam]);

  useEffect(() => {
    refetch();
  }, [refetch, currentPage]);

  return { data, currentPage, isLoading, isFetching };
};
