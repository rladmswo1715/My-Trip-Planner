'use client';

import InnerLayout from '@/components/layout/InnerLayout';
import SlideContainer from './slide/SlideContainer';
import { useQuery } from '@tanstack/react-query';
import { getMainSlides } from '@/apis/main';
import { useMemo } from 'react';
import { SLIDES_INFO } from '@/constants/mainSlides';

const ListSection = () => {
  const { data } = useQuery({
    queryKey: ['slides'],
    queryFn: getMainSlides,
  });

  const slidesData = useMemo(() => {
    if (!data) return [];
    return SLIDES_INFO.map(({ title, key }) => ({
      title,
      items: data[key] || [],
    }));
  }, [data]);

  return (
    <InnerLayout className="flex flex-col gap-[4rem] max-w-[146.4rem] px-[4.8rem]">
      {slidesData.map((item) => {
        return (
          <SlideContainer key={item.title} slideItems={item.items}>
            {item.title}
          </SlideContainer>
        );
      })}
    </InnerLayout>
  );
};

export default ListSection;
