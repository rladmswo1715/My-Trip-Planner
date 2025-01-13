'use client';
import React from 'react';
import { usePlanContext } from '@/providers/contexts/PlanContext';
import { calculateTripDuration } from '@/utils/dateUtils';
import Image from 'next/image';
import thumnail from '@/assets/img/def-thumnail.png';
const PlanDetails = () => {
  const { planData } = usePlanContext();
  const { startDate, endDate, people, title, subtitle } = planData;

  const duration = calculateTripDuration({ endDate, startDate });
  const detailinfo = [
    {
      key: '기간',
      value: `${startDate} ~ ${endDate} · ${duration?.nights}박 ${duration?.days}
                일`,
    },
    {
      key: '인원',
      value: `${people}명`,
    },
    {
      key: '교통수단',
      value: `자차`,
    },
    {
      key: '예상비용',
      value: `0원`,
    },
  ];
  return (
    <div className="flex justify-between w-full">
      <div className="flex-col relative space-y-[2.8rem]">
        <div className="flex-col relative space-y-[0.4rem]">
          {/* 제목라인 */}
          <div className="flex">
            <span className="leading-[4.8rem] text-[3.2rem] font-bold">
              {title || '제목 없음'}
            </span>
            <div className="text-var-enable-text py-[1.1rem] pl-[1.2rem] cursor-pointer leading-[2.6rem] text-[2rem]">
              편집
            </div>
            <div className="flex gap-[1.6rem] py-[1.1rem] pl-[6.8rem] cursor-pointer leading-[2.6rem] text-[2rem]">
              <div>공개</div>
              <div>비공개</div>
            </div>
          </div>
          {/* 부제목라인 */}
          <span className="leading-[2.6rem] text-[2rem] text-var-enable-text">
            {subtitle || '--'}
          </span>
        </div>
        {/* 여행정보라인 */}
        <div className="flex-col space-y-[2rem]">
          {/* 여행정보 */}
          <span className="flex text-[2.4rem] leading-[3.6rem] font-semibold">
            여행정보
          </span>

          <div className="flex flex-col gap-[1.2rem]">
            {/* 기간  */}
            {detailinfo.map((e) => (
              <div className="flex items-center gap-[1.2rem]" key={e.key}>
                <span className="text-[2rem] leading-[3rem] font-semibold">
                  {e.key}
                </span>
                <span className="text-[2rem] leading-[2.6rem] text-var-enable-text">
                  {e.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-[48rem] h-[27.6rem] rounded-[1.6rem] bg-var-enable-bg items-center justify-center hover:bg-black/50 transition-all cursor-pointer self-end">
        <div></div>
        <Image src={thumnail} alt="thumnail" />
      </div>
    </div>
  );
};

export default PlanDetails;
