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

  const noSlideItemRender = (
    <div className="flex justify-center items-center min-h-[10rem] text-[2rem] font-semibold">
      추천하는 슬라이드가 없어요..
    </div>
  );

  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="w-full max-w-[128rem] mx-auto ">
        <h3 className="font-semibold text-[2.8rem] text-black text-left leading-[3.341rem] tracking-2percent">
          {children}
        </h3>
      </div>

      <div className="relative">
        {slideItemsLength > 0 ? (
          <>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              navigation
            >
              {slideItems.map((item) => (
                <SwiperSlide key={item.planId}>
                  <PlannerCard cardType="main" cardInfo={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {slideItemsLength > 4 && (
              <>
                <SlideCustomButton direction="left" onClick={handlePrev} />
                <SlideCustomButton direction="right" onClick={handleNext} />
              </>
            )}
          </>
        ) : (
          noSlideItemRender
        )}
      </div>
    </div>
  );
};

export default SlideContainer;
