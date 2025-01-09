import Button from '@/components/common/Button';
import ProfileImage from '@/components/ui/ProfileImage';

const ProfileEditContents = () => {
  return (
    <>
      <div className="flex items-center gap-[2rem] text-[1.8rem] leading-[2.148rem]">
        <ProfileImage imageUrl={''} size="l" />
        <div className="flex flex-col gap-[0.8rem]">
          <input
            defaultValue="홍길동"
            className="text-black font-medium w-[18rem] p-[1.2rem] border border-black rounded-lg focus:outline-none"
          />
          <span className="text-black/50">gildong123@gmail.com</span>
        </div>
      </div>
      <Button size="md" btnColor="white" className="text-var-primary-500">
        완료
      </Button>
    </>
  );
};

export default ProfileEditContents;
