import InnerLayout from '@/components/layout/InnerLayout';
import PlanInfoSection from '@/components/pages/detailedPost/PlanInfoSection';
import CommentsSection from '@/components/pages/detailedPost/CommentsSection';

const Plan = () => {
  return (
    <InnerLayout className="max-w-[124.8rem] mt-[4rem] mb-[10rem]">
      <PlanInfoSection />
      <CommentsSection />
    </InnerLayout>
  );
};

export default Plan;
