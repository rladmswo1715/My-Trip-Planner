import InnerLayout from '@/components/layout/InnerLayout';
import SlideContainer from './slide/SlideContainer';
import { TMainCardList } from '@/types/card';
import { mainListMock } from '@/utils/mockData';

interface SlideInfo {
  title: string;
  items: TMainCardList[];
}

// response 값에 따라 slideType 수정
const SLIDES_INFO: SlideInfo[] = [
  {
    title: '마이트립플래너 추천, 인기 일정',
    items: mainListMock.mostViewPlans,
  },
  { title: '홍대/합정/상수 인기 일정', items: mainListMock.mostRecentPlans },
  {
    title: '이태원/용산/삼각지 인기 일정',
    items: mainListMock.HongdaeHotPlans,
  },
];

const ListSection = () => {
  return (
    <InnerLayout className="flex flex-col gap-[4rem] max-w-[146.4rem] px-[4.8rem]">
      {SLIDES_INFO.map((item) => {
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
