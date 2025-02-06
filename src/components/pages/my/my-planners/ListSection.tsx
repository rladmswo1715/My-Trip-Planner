'use client';

import CardList from '../CardList';
import { getMyPlanners } from '@/apis/mypage';
import { TMyPlanners } from '@/types/responseData/mypage';
import Pagination from '@/components/common/Pagination';
import { useMypagePlannerList } from '@/lib/hooks/useMypagePlannerList';
import Spinner from '@/components/common/Spinner';

const MyPlannerListSection = () => {
  const { data, currentPage, isLoading, isFetching } =
    useMypagePlannerList<TMyPlanners>({
      fetchPlanners: getMyPlanners,
      pageType: 'myPlanners',
    });

  if (isLoading || isFetching) return <Spinner isPageLoading={false} />;
  if (!data?.content || data.content.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-[2rem] font-bold">
        내 일정이 없어요..
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-[6rem]">
      <CardList listItems={data?.content || []} />
      <Pagination
        pageType="my"
        currentPage={currentPage}
        totalPages={data?.totalPages || 1}
      />
    </div>
  );
};

export default MyPlannerListSection;
