import LoginRoutingClient from '@/components/auth/login/LoginRoutingClient';
import IntroSection from '@/components/pages/main/IntroSection';
import ListSection from '@/components/pages/main/ListSection';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { sign } = await searchParams;

  return (
    <div className="flex flex-col mt-[4rem] gap-[4.4rem] pb-[12rem]">
      <IntroSection />
      <ListSection />
      {sign && <LoginRoutingClient />}
    </div>
  );
}
