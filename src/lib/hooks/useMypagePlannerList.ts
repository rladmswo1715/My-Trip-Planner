import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface useMypagePlannerListProps<T> {
  fetchPlanners: (page: number) => Promise<T>;
  pageType: string;
}

export const useMypagePlannerList = <T>({
  fetchPlanners,
  pageType,
}: useMypagePlannerListProps<T>) => {
  const searchParams = useSearchParams();
  const currentPageParam = parseInt(searchParams.get('currentPage') || '1', 10);
  const [currentPage, setCurrentPage] = useState(currentPageParam);

  const { data, refetch } = useQuery<T, Error>({
    queryKey: ['userId', 1, { pageType, currentPage }],
    queryFn: () => fetchPlanners(currentPage),
  });

  useEffect(() => {
    setCurrentPage(currentPageParam);
  }, [currentPageParam]);

  useEffect(() => {
    refetch();
  }, [refetch, currentPage]);

  return { data, currentPage };
};
