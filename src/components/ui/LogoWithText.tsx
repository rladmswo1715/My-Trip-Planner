import Image from 'next/image';
import { ICONS } from '@/constants/importImages';

const LogoWithText = () => {
  return (
    <div className="flex items-center gap-[0.8rem]">
      <Image src={ICONS.iconLogoWhite.src} alt={ICONS.iconLogoWhite.alt} />
      <span className="font-jalnan text-[2.8rem] leading-[4.5rem] text-white">
        마이트립플래너
      </span>
    </div>
  );
};

export default LogoWithText;
