'use client';

import CardList from '../CardList';
import { getMyPlanners } from '@/apis/mypage';
import { TMyPlanners } from '@/types/responseData/mypage';
import Pagination from '@/components/common/Pagination';
import { useMypagePlannerList } from '@/lib/hooks/useMypagePlannerList';

const MyPlannerListSection = () => {
  const { data, currentPage } = useMypagePlannerList<TMyPlanners>({
    fetchPlanners: getMyPlanners,
    pageType: 'myPlanners',
  });

  return (
    <div className="flex flex-col gap-[6rem]">
      <CardList listItems={data?.plans || []} />
      <Pagination
        pageType="my"
        currentPage={currentPage}
        totalPages={data?.totalPages || 1}
      />
    </div>
  );
};

export default MyPlannerListSection;
