'use client';
import React from 'react';
import { usePlanContext } from '@/providers/contexts/PlanContext';
import { calculateTripDuration } from '@/utils/dateUtils';
import Image from 'next/image';
import thumnail from '@/assets/img/def-thumnail.png';
import useImagePreview from '@/lib/hooks/useFileUpload';
import Icons from '@/components/common/Icons';
import PlanDetailsTitleChange from './PlanDetailsTitleChange';
const PlanDetails = () => {
  const { planData, image } = usePlanContext();
  const { startDate, endDate, people, subtitle } = planData;
  const { handleImageChange, previewImage, resetImage } = useImagePreview({
    setImage: image.setImage,
  });

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
      value: `${planData.days
        .reduce((acc, cur) => acc + cur.cost, 0)
        .toLocaleString()} 원`,
    },
  ];

  return (
    <div className="flex justify-between w-full">
      <div className="flex-col relative space-y-[2.8rem]">
        <div className="flex-col relative space-y-[0.4rem]">
          {/* 제목라인 */}
          <PlanDetailsTitleChange />
          {/* <div className="flex gap-[1.6rem] py-[1.1rem] pl-[6.8rem] cursor-pointer leading-[2.6rem] text-[2rem]">
              <div>공개</div>
              <div>비공개</div>
            </div> */}
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

      <div className="flex w-[48rem] h-[27.6rem] rounded-[1.6rem] bg-var-enable-bg items-center justify-center group hover:bg-black/50 transition-all self-end overflow-hidden">
        {previewImage ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={previewImage}
              alt="adsf"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex w-full h-full justify-center items-center">
                <Icons.Close.CloseIcon
                  size={42}
                  color={'white'}
                  className="cursor-pointer"
                  onClick={() => resetImage()}
                ></Icons.Close.CloseIcon>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={thumnail}
              alt="thumnail"
              className="cursor-pointer"
              onClick={() => document.getElementById('fileInput')?.click()}
            />
          </>
        )}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default PlanDetails;
