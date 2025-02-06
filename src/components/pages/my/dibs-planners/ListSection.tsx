'use client';

import CardList from '../CardList';
import { TMyPlanners } from '@/types/responseData/mypage';
import { getDibsPlanners } from '@/apis/mypage';
import Pagination from '@/components/common/Pagination';
import { useMypagePlannerList } from '@/lib/hooks/useMypagePlannerList';
import Spinner from '@/components/common/Spinner';

const DibsPlannerListSection = () => {
  const { data, currentPage, isLoading, isFetching } =
    useMypagePlannerList<TMyPlanners>({
      fetchPlanners: getDibsPlanners,
      pageType: 'dibsPlanners',
    });

  if (isLoading || isFetching) return <Spinner isPageLoading={false} />;

  if (!data?.content || data.content.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-[2rem] font-bold">
        찜한 일정이 없어요..
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-[6rem]">
      <CardList listItems={data?.content || []} />
      <Pagination
        pageType="dibs"
        currentPage={currentPage}
        totalPages={data?.totalPages || 1}
      />
    </div>
  );
};

export default DibsPlannerListSection;
