import Image from 'next/image';
import { IMAGES, ICONS } from '@/constants/importImages';

export default function Home() {
  return (
    <div>
      <span className="text-[2rem] text-var-primary-500">
        size/color: 20px/primary-500 , font: pretendard
      </span>

      <Image src={IMAGES.defaultProfile.src} alt={IMAGES.defaultProfile.alt} />

      <Image src={ICONS.iconCalendar.src} alt={ICONS.iconCalendar.alt} />
      <Image
        src={ICONS.iconCategoryBuilding.src}
        alt={ICONS.iconCategoryBuilding.alt}
      />
    </div>
  );
}
