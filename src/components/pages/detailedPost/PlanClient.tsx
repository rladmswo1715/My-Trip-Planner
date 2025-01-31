'use client';

import PlanInfoSection from '@/components/pages/detailedPost/PlanInfoSection';
import CommentsSection from '@/components/pages/detailedPost/CommentsSection';
import PlanDayScheduleSection from '@/components/pages/detailedPost/PlanDayScheduleSection';
import UserActionSection from '@/components/pages/detailedPost/UserActionSection';
import Cookies from 'js-cookie';

interface PlanClientProps {
  planId: number;
}

const getCookieValue = (key: string): string => {
  return Cookies.get(key) || '';
};

const PlanClient = ({ planId }: PlanClientProps) => {
  const accessToken = getCookieValue('accessToken');
  const socialId = getCookieValue('socialId');

  const commonProps = { planId, accessToken, socialId };

  return (
    <>
      <PlanInfoSection {...commonProps} />
      <PlanDayScheduleSection />
      <UserActionSection planId={planId} />
      <CommentsSection {...commonProps} />
    </>
  );
};

export default PlanClient;
