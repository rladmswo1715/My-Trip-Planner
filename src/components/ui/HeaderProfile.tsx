import Link from 'next/link';
import ProfileImage from './ProfileImage';

interface HeaderProfileProps {
  src: string;
  nickname: string;
}

const HeaderProfile = ({ src, nickname }: HeaderProfileProps) => {
  return (
    <Link href="/mypage" className="flex items-center gap-[1.2rem]">
      <ProfileImage imageUrl={src} size="m" />
      <span className="text-[2rem] font-normal text-white">{nickname}</span>
    </Link>
  );
};

export default HeaderProfile;
