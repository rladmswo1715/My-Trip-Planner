'use client';

import { getPlanSchedules } from '@/apis/plan';
import DetailedViewKakaoMap from '@/components/maps/DetailedViewKakaoMap';
import ScheduleCard from '@/components/ui/schedule/ScheduleCard';
import { useQueries } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

interface PlanDayScheduleSectionProps {
  planId: number;
  accessToken: string;
  days: number[];
}

const PlanDayScheduleSection = ({
  planId,
  accessToken,
  days,
}: PlanDayScheduleSectionProps) => {
  const [dayTab, setDayTab] = useState(1);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const queries = useQueries({
    queries: days.map((day) => ({
      queryKey: ['plan', planId, 'schedule', day],
      queryFn: () => getPlanSchedules(planId, accessToken, day),
    })),
  });

  const tabHandler = (day: number) => {
    document
      .getElementById(`Day${day}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 스크롤 영역으로 이동 중 옵저버 영역에 들어갔다 나가면서 지도가 여러번 바뀌는 현상때문에 딜레이 적용
    setTimeout(() => {
      setDayTab(day);
    }, 700);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLElement
            );
            if (index !== -1) {
              setDayTab(days[index]);
            }
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [days]);

  return (
    <section className="pt-[4rem] mt-[4rem] border-t border-[#D9D9D9]">
      <h3 className="text-[2.4rem] font-semibold leading-[2.864rem]">
        여행 동선
      </h3>
      <div className="flex flex-col gap-[6rem]">
        <div className="flex mt-[2.4rem] sticky top-0 bg-background z-40">
          <div className="flex h-full border-b gap-[4rem]">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => tabHandler(day)}
                className={`${
                  dayTab === day ? 'text-var-primary-500' : 'text-var-enable'
                } text-[2rem] leading-[3rem] flex justify-center items-center w-[6rem]`}
              >
                {`Day${day}`}
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
            {queries.map((query, index) => (
              <div
                ref={(el) => {
                  if (el) sectionRefs.current[index] = el;
                }}
                key={index}
                className="mb-[4rem]"
              >
                <ScheduleCard
                  key={index}
                  day={index + 1}
                  people={4}
                  scheduleData={query.data}
                  date={new Date()}
                  isDetailView
                />
              </div>
            ))}
          </div>
          <div className="sticky top-1/3 h-full w-[70rem] z-50 rounded-[1.2rem] overflow-hidden">
            <DetailedViewKakaoMap
              detail={queries[dayTab - 1].data?.detail || []}
              day={dayTab}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanDayScheduleSection;
