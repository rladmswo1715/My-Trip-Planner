import PlanDetails from '@/components/plan/plan-create/PlanDetails';
import { PlanProvider } from '@/providers/contexts/PlanContext';

import { redirect } from 'next/navigation';
import React from 'react';

export const fetchCache = 'force-no-store';

const PlanPage = async ({
  params,
}: {
  params: Promise<{ planid: string }>;
}) => {
  const { planid } = await params;

  if (!planid) {
    return redirect('/test');
  }

  return (
    <PlanProvider>
      <section className="relative w-full min-h-screen bg-var-enable-bg flex justify-center p-[4rem]">
        <div className="flex w-[127.9rem] h-[39.8rem] rounded-[2rem] p-[4rem] bg-white">
          <PlanDetails />
        </div>
      </section>
    </PlanProvider>
  );
};

export default PlanPage;
