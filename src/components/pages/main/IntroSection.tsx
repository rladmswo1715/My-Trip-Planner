import InnerLayout from '@/components/layout/InnerLayout';
import SearchForm from '@/components/search/SearchForm';

const IntroSection = () => {
  return (
    <InnerLayout className="max-w-[127.3rem] px-[14rem]">
      <div className="flex flex-col gap-[4rem]">
        <h2 className="font-nanumSquare font-bold text-[4rem] leading-[4.54rem] tracking-2percent text-center">
          마이트립플래너와 함께 여행 일정을 완성하세요
        </h2>
        <SearchForm />
      </div>
    </InnerLayout>
  );
};

export default IntroSection;
