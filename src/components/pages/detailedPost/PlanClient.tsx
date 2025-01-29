import PlanInfoSection from '@/components/pages/detailedPost/PlanInfoSection';
import CommentsSection from '@/components/pages/detailedPost/CommentsSection';
import PlanDayScheduleSection from '@/components/pages/detailedPost/PlanDayScheduleSection';
import UserActionSection from '@/components/pages/detailedPost/UserActionSection';

interface PlanClientProps {
  planId: number;
}

const PlanClient = ({ planId }: PlanClientProps) => {
  return (
    <>
      <PlanInfoSection planId={planId} />
      <PlanDayScheduleSection />
      <UserActionSection planId={planId} />
      <CommentsSection />
    </>
  );
};

export default PlanClient;
