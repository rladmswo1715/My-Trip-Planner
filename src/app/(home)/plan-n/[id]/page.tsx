import InnerLayout from '@/components/layout/InnerLayout';
import PlanClient from '@/components/pages/detailedPost/PlanClient';

const Plan = async ({ params }: { params: Promise<{ id: number }> }) => {
  const planId = (await params).id;

  return (
    <InnerLayout className="max-w-[124.8rem] mt-[4rem] mb-[10rem]">
      <PlanClient planId={planId} />
    </InnerLayout>
  );
};

export default Plan;
