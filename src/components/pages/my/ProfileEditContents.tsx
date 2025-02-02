import Button from '@/components/common/Button';
import useImagePreview from '@/lib/hooks/useFileUpload';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { patchEditProfile } from '@/apis/mypage';
import EditProfileImage from './EditProfileImage';
import { z } from 'zod';
import toast from 'react-hot-toast';

interface ProfileEditContentsProps {
  cancelClick: () => void;
  currentNickname: string;
  currentImage: string;
}

const nicknameSchema = z
  .string()
  .min(2, '닉네임은 최소 2자 이상 입력해야 합니다.')
  .max(10, '닉네임은 최대 10자까지 가능합니다.')
  .regex(
    /^(?=.*[가-힣a-zA-Z0-9])[가-힣a-zA-Z0-9]+$/,
    '닉네임은 한글, 영문, 숫자만 가능합니다.'
  );

// const checkDataValidation = (nickname: string) => {
//   const regex = /^(?=.*[가-힣])|(?=.*[a-zA-Z])|(?=.*\d)[가-힣a-zA-Z0-9]+$/;
//   return nickname.trim() && regex.test(nickname);
// };

const ProfileEditContents = ({
  cancelClick,
  currentNickname,
  currentImage,
}: ProfileEditContentsProps) => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string>(currentNickname);
  const { previewImage, handleImageChange, resetImage } = useImagePreview({
    setImage,
    currentIamgeURL: currentImage,
  });
  const accessToken = Cookies.get('accessToken') as string;

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);

    const validationResult = nicknameSchema.safeParse(value);
    if (!validationResult.success) {
      setErrorMessage(validationResult.error.errors[0].message);
    } else {
      setErrorMessage(null);
    }
  };

  const editProfileMutation = useMutation({
    mutationFn: (profileFormData: FormData) =>
      patchEditProfile(profileFormData, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profiles'],
      });
      cancelClick();
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
    const validationResult = nicknameSchema.safeParse(nickname);
    if (!validationResult.success) {
      toast.error(`${validationResult.error.errors[0].message}`);
      return;
    }
    try {
      // if (!checkDataValidation(nickname)) return;

      const formData = new FormData();

      if (image) {
        formData.append('image', image);
      }
      formData.append('profile', JSON.stringify({ nickname }));

      editProfileMutation.mutate(formData);
      toast.success(`프로필 변경 성공`);
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
          onChange={handleNicknameChange}
          maxLength={13}
        />
        {errorMessage && (
          <span className="text-red-500 text-[1.4rem] mt-1">
            {errorMessage}
          </span>
        )}
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
          disabled={!!errorMessage}
        >
          완료
        </Button>
      </div>
    </form>
  );
};

export default ProfileEditContents;
