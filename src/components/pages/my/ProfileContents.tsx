import Button from '@/components/common/Button';
import ProfileImage from '@/components/ui/ProfileImage';
import ProfileEditContents from './ProfileEditContents';

interface ProfileContentsProps {
  isEdit: boolean;
  editButtonClick: () => void;
}

const ProfileContents = ({ isEdit, editButtonClick }: ProfileContentsProps) => {
  return (
    <>
      {isEdit ? (
        <ProfileEditContents cancelClick={editButtonClick} />
      ) : (
        <div className="flex flex-col gap-[2.8rem]">
          <div className="flex items-center gap-[2rem]">
            <ProfileImage imageUrl={''} size="l" />
            <span className="text-[1.8rem] leading-[2.148rem] text-black font-medium">
              홍길동
            </span>
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
        </div>
      )}
    </>
  );
};

export default ProfileContents;
