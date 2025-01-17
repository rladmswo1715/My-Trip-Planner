'use client';

import CardList from '../CardList';
import { TMyPlanners } from '@/types/responseData/mypage';
import { getDibsPlanners } from '@/apis/mypage';
import Pagination from '@/components/common/Pagination';
import { useMypagePlannerList } from '@/lib/hooks/useMypagePlannerList';

const DibsPlannerListSection = () => {
  const { data, currentPage } = useMypagePlannerList<TMyPlanners>({
    fetchPlanners: getDibsPlanners,
    pageType: 'dibsPlanners',
  });

  return (
    <div className="flex flex-col gap-[6rem]">
      <CardList listItems={data?.plans || []} />
      <Pagination
        pageType="dibs"
        currentPage={currentPage}
        totalPages={data?.totalPages || 1}
      />
    </div>
  );
};

export default DibsPlannerListSection;
