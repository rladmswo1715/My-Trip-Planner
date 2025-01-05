import Image from 'next/image';
import { IMAGES, ICONS } from '@/constants/importImages';
import Chip from '@/components/common/Chip';
import Tag from '@/components/common/Tag';
import Icons from '@/components/common/Icons';

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
      <div className="flex flex-col">
        <Chip state>asd</Chip>
        <Chip state={false}>asd</Chip>

        <Tag close={true} color="blue">
          tag
        </Tag>
        <Tag close={true} color="blackWhite">
          tag
        </Tag>
        <Tag close={true} color="black">
          tag
        </Tag>
        <Tag close={true} color="blueWhite">
          tag
        </Tag>
        <Icons.Close color="red" size={24} />
      </div>
    </div>
  );
}
