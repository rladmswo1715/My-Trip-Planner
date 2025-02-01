'use client';

import KakaoMap from '@/components/maps/KakaoMap';
import ScheduleCard from '@/components/ui/schedule/ScheduleCard';
import { useState } from 'react';

const planData = { days: [1, 2, 3, 4] };

const DATA = {
  day: 4,
  cost: 20000,
  date: '2025-01-26',
  detail: [
    {
      order: 4,
      place: '제주',
      streetAddress: '제주도 주소',
      latitude: 2,
      longitude: 4,
      categoryName: '카테고리',
    },
  ],
};

const PlanDayScheduleSection = () => {
  const [dayTab] = useState(1);

  return (
    <section className="pt-[4rem] mt-[4rem] border-t border-[#D9D9D9]">
      <h3 className="text-[2.4rem] font-semibold leading-[2.864rem]">
        여행 동선
      </h3>
      <div className="flex flex-col gap-[6rem]">
        <div className="flex mt-[2.4rem] sticky top-0 bg-background z-40">
          <div className="flex h-full border-b gap-[4rem]">
            {planData.days.map((e) => (
              <button
                key={e}
                //onClick={() => tabHandler(e.day)}
                className={`${
                  dayTab === e ? 'text-var-primary-500' : 'text-var-enable'
                } text-[2rem] leading-[3rem] flex justify-center items-center w-[6rem]`}
              >
                {`Day${e}`}
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

        <div className="flex justify-between">
          <div>
            {Array.from({ length: 4 }, (_, a) => (
              <ScheduleCard
                key={a}
                day={a + 1}
                people={4}
                scheduleData={DATA}
                date={new Date()}
                isDetailView
              />
            ))}
          </div>
          <div className="sticky top-1/3 h-full w-[70rem] z-50 rounded-[1.2rem] overflow-hidden">
            <KakaoMap detail={[]} day={dayTab - 1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanDayScheduleSection;
