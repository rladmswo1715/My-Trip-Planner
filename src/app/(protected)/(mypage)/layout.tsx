import InnerLayout from '@/components/layout/InnerLayout';
import NavigationBar from '@/components/pages/my/NavigationBar';
import ProfileSection from '@/components/pages/my/ProfileSection';
import SideNavigation from '@/components/pages/my/SideNavigation';

interface MypageLayoutProps {
  children: React.ReactNode;
}

const MypageLayout = ({ children }: MypageLayoutProps) => {
  return (
    <div className="w-full min-h-[calc(100vh-112px)] pt-[2.7rem] pb-[9.8rem] bg-[#F8F9F9] flex">
      <InnerLayout className="min-h-full flex justify-between gap-[2.8rem]">
        <SideNavigation />
        <div className="flex flex-col gap-[3.2rem] grow size-full bg-white shadow-container p-[4rem]">
          <ProfileSection />
          <NavigationBar />
          {children}
        </div>
      </InnerLayout>
    </div>
  );
};

export default MypageLayout;
