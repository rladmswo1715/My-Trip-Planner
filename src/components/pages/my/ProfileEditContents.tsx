import Button from '@/components/common/Button';
import useImagePreview from '@/lib/hooks/useFileUpload';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/importImages';

interface ProfileEditContentsProps {
  cancelClick: () => void;
}

const ProfileEditContents = ({ cancelClick }: ProfileEditContentsProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [nickname, setNickname] = useState<string>('홍길동');
  const { previewImage, handleImageChange, resetImage } = useImagePreview({
    setImage,
  });
  /* const editProfileMutation = useMutation({
    mutationFn: (patchProfileData: TPatchUser) =>
      patchEditProfile(patchProfileData),
    onSuccess: () => {
      alert('..');
    },
  }); */

  const buttonClickHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const editCancelHandler = () => {
    resetImage();
    cancelClick();
  };

  const editProfileHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!checkDataValidation) return;

      // const patchProfileData = { image: image, nickname: nickname };
      // editProfileMutation.mutate(patchProfileData);
    } catch (error) {
      console.log('error :', error);
    }
  };

  const checkDataValidation = () => {
    const regex = /^(?=.*[가-힣])|(?=.*[a-zA-Z])|(?=.*\d)[가-힣a-zA-Z0-9]+$/;

    if (!nickname.trim() || !regex.test(nickname)) return false;
    return true;
  };

  const fileButtonStyle = image
    ? {
        backgroundImage: `url(${previewImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8,
      }
    : { backgroundColor: '#EEEEEE' };

  return (
    <form className="flex flex-col gap-[2.8rem]">
      <div className="flex items-center gap-[2rem] text-[1.8rem] leading-[2.148rem]">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <button
          type="button"
          onClick={buttonClickHandler}
          className="flex justify-center items-center w-[8rem] h-[8rem] rounded-[50%] hover:cursor-pointer"
          style={fileButtonStyle}
        >
          <Image src={ICONS.iconPlus.src} alt="파일 추가" />
        </button>

        <input
          value={nickname}
          className="text-black font-medium w-[18rem] p-[1.2rem] border border-black rounded-lg focus:outline-none"
          onChange={(e) => setNickname(e.target.value)}
          maxLength={10}
        />
      </div>
      <div className="flex gap-[1.2rem]">
        <Button
          size="md"
          btnColor="white"
          className="text-var-primary-500"
          onClick={editCancelHandler}
        >
          취소
        </Button>
        <Button
          size="md"
          btnColor="white"
          className="text-var-primary-500"
          onClick={editProfileHandler}
        >
          완료
        </Button>
      </div>
    </form>
  );
};

export default ProfileEditContents;
