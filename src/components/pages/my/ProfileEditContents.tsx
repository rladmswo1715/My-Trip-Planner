import Button from '@/components/common/Button';
import useImagePreview from '@/lib/hooks/useFileUpload';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { patchEditProfile } from '@/apis/mypage';
import EditProfileImage from './EditProfileImage';

interface ProfileEditContentsProps {
  cancelClick: () => void;
  currentNickname: string;
  currentImage: string;
}

const checkDataValidation = (nickname: string) => {
  const regex = /^(?=.*[가-힣])|(?=.*[a-zA-Z])|(?=.*\d)[가-힣a-zA-Z0-9]+$/;
  return nickname.trim() && regex.test(nickname);
};

const ProfileEditContents = ({
  cancelClick,
  currentNickname,
  currentImage,
}: ProfileEditContentsProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [nickname, setNickname] = useState<string>(currentNickname);
  const { previewImage, handleImageChange, resetImage } = useImagePreview({
    setImage,
    currentIamgeURL: currentImage,
  });
  const accessToken = Cookies.get('accessToken') as string;

  const editProfileMutation = useMutation({
    mutationFn: (profileFormData: FormData) =>
      patchEditProfile(profileFormData, accessToken),
    onSuccess: () => {
      alert('성공');
    },
    onError: ({ message }) => {
      console.log('Error ::', message);
    },
  });

  const editCancelHandler = () => {
    resetImage();
    cancelClick();
  };

  const editProfileHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!checkDataValidation(nickname)) return;

      const formData = new FormData();

      if (image) {
        formData.append('image', image);
      }
      formData.append('profile', JSON.stringify({ nickname }));

      editProfileMutation.mutate(formData);
    } catch (error) {
      console.log('error :', error);
    }
  };

  return (
    <form className="flex flex-col gap-[2.8rem]">
      <div className="flex items-center gap-[2rem] text-[1.8rem] leading-[2.148rem]">
        <EditProfileImage
          currentImage={currentImage}
          previewImage={previewImage}
          imageFile={image}
          handleImageChange={handleImageChange}
        />
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
