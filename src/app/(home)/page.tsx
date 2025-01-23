import IntroSection from '@/components/pages/main/IntroSection';
import ListSection from '@/components/pages/main/ListSection';

export default function Home() {
  return (
    <div className="flex flex-col mt-[4rem] gap-[4.4rem] pb-[12rem]">
      <IntroSection />
      <ListSection />
    </div>
  );
}
