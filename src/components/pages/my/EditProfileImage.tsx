import { useCallback, useRef } from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/importImages';

interface EditProfileImageProps {
  currentImage: string;
  previewImage: string | null;
  imageFile: File | null;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditProfileImage = ({
  currentImage,
  previewImage,
  handleImageChange,
  imageFile,
}: EditProfileImageProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const buttonClickHandler = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const fileButtonStyle =
    currentImage || imageFile
      ? {
          backgroundImage: `url(${previewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
        }
      : { backgroundColor: '#EEEEEE' };

  return (
    <>
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
    </>
  );
};

export default EditProfileImage;
