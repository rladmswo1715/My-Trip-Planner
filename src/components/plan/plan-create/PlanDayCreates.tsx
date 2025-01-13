'use client';

import { usePlanContext } from '@/providers/contexts/PlanContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import PlanDayDetailCreate from './PlanDayDetailCreate';

const PlanDayCreates = () => {
  const [dayTab, setDayTab] = useState(1);
  const { planData } = usePlanContext();
  const router = useRouter();
  const tabHandler = (day: number) => {
    setDayTab(day);
    router.replace(`#Day${day}`);
  };
  return (
    <div className="flex w-full">
      <div className="flex-col space-y-[4.8rem]">
        <span className="flex text-[2.4rem] leading-[2.8rem] font-semibold">
          여행 동선
        </span>

        <div className="flex mb-[2rem] sticky top-0 bg-background">
          <div className="flex h-[3.4rem] border-b gap-[4rem] relative">
            {planData.days.map((e) => (
              <button
                key={e.date}
                onClick={() => tabHandler(e.day)}
                className={`${
                  dayTab === e.day ? 'text-var-primary-500' : 'text-var-enable'
                } text-[2rem] leading-[3rem] flex justify-center items-center w-[6rem]`}
              >
                {`Day${e.day}`}
              </button>
            ))}

            <div
              style={{
                transform: `translateX(${0 + (dayTab - 1) * (6 + 4)}rem)`,
              }}
              className={`absolute bottom-0 border-b-2 border-b-var-primary-500 w-[6rem] transition-transform duration-300`}
            />
          </div>
        </div>

        <PlanDayDetailCreate planData={planData} />
      </div>
    </div>
  );
};

export default PlanDayCreates;
