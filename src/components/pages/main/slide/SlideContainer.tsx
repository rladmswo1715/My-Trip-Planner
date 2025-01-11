'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import PlannerCard from '@/components/ui/card/PlannerCard';
import { ReactNode, useRef } from 'react';
import { TMainCardList } from '@/types/card';

import 'swiper/css';
import SlideCustomButton from './SlideCustomButton';

interface SlideContainerProps {
  children: ReactNode;
  slideItems: TMainCardList[];
}

const SlideContainer = ({ children, slideItems }: SlideContainerProps) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const slideItemsLength = slideItems.length;

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="w-full max-w-[128rem] mx-auto ">
        <h3 className="font-semibold text-[2.8rem] text-black text-left leading-[3.341rem] tracking-2percent">
          {children}
        </h3>
      </div>

      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          navigation
        >
          {slideItems.map((item) => {
            return (
              <SwiperSlide key={item.title}>
                <PlannerCard cardType="main" cardInfo={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {slideItemsLength > 4 && (
          <>
            <SlideCustomButton direction="left" onClick={handlePrev} />
            <SlideCustomButton direction="right" onClick={handleNext} />
          </>
        )}
      </div>
    </div>
  );
};

export default SlideContainer;
