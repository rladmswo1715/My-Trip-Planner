import Image from 'next/image';
import { IMAGES } from '@/constants/importImages';

const PROFILE_SIZE = {
  m: 48,
  l: 80,
};

interface ProfileImageProps {
  imageUrl: string | null;
  size: 'm' | 'l';
  priority?: boolean;
}

const ProfileImage = ({ imageUrl, size, priority }: ProfileImageProps) => {
  return (
    <Image
      src={imageUrl ? imageUrl : IMAGES.defaultProfile.src}
      width={PROFILE_SIZE[size]}
      height={PROFILE_SIZE[size]}
      alt="프로필이미지"
      className="shrink-0 object-cover shadow-md rounded-full"
      priority={priority}
    />
  );
};

export default ProfileImage;
