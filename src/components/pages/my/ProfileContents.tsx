import Button from '@/components/common/Button';
import ProfileImage from '@/components/ui/ProfileImage';
import ProfileEditContents from './ProfileEditContents';

interface ProfileContentsProps {
  isEdit: boolean;
  editButtonClick: () => void;
}

const ProfileContents = ({ isEdit, editButtonClick }: ProfileContentsProps) => {
  return (
    <div className="flex flex-col gap-[2.8rem]">
      {isEdit ? (
        <ProfileEditContents />
      ) : (
        <>
          <div className="flex items-center gap-[2rem]">
            <ProfileImage imageUrl={''} size="l" />
            <p className="flex flex-col gap-[0.8rem] text-[1.8rem] leading-[2.148rem]">
              <span className="text-black font-medium">홍길동</span>
              <span className="text-black/50">gildong123@gmail.com</span>
            </p>
          </div>
          <div className="flex items-center gap-[1.2rem]">
            <Button
              size="md"
              btnColor="white"
              className="text-var-primary-500"
              onClick={editButtonClick}
            >
              프로필 편집
            </Button>
            <Button size="md" btnColor="white" className="text-var-primary-500">
              로그아웃
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileContents;
