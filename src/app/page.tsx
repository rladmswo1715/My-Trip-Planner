import Image from 'next/image';
import { IMAGES, ICONS } from '@/constants/importImages';
import Header from '@/components/ui/Header';
import ProfileImage from '@/components/ui/ProfileImage';
import HeaderProfile from '@/components/ui/HeaderProfile';
import PlannerCard from '@/components/ui/card/PlannerCard';
import { TMainCardList, TMypageCardList } from '@/types/card';
import testImage from '@/assets/img/test-img.png';
import ScheduleCard from '@/components/ui/schedule/ScheduleCard';

const LIST_DATA: TMainCardList = {
  title: '제주 서쪽 3박4일 코스코스',
  placeCategory: ['애월', '협제', '서귀포'],
  startDate: '2024-01-01',
  endDate: '2024-01-04',
  people: 3,
  transportation: 'PUBLIC_TRANSPORT',
  totalCost: 100000,
  thumbnail: testImage,
};

const MYPAGE_DATA: TMypageCardList = {
  bookmarkId: 1,
  planId: 1,
  title: '애월-협재-서귀포 제주 서쪽 3박 4일 여행',
  created_at: new Date(2025, 0, 5),
  thumbnail: testImage,
  categories: ['애월', '협재', '서귀포'],
};

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <span className="text-[2rem] text-var-primary-500">
          size/color: 20px/primary-500 , font: pretendard
        </span>

        <Image
          src={IMAGES.defaultProfile.src}
          alt={IMAGES.defaultProfile.alt}
        />

        <Image src={ICONS.iconCalendar.src} alt={ICONS.iconCalendar.alt} />
        <Image
          src={ICONS.iconCategoryBuilding.src}
          alt={ICONS.iconCategoryBuilding.alt}
        />

        {/* <ScheduleCard /> */}

        <HeaderProfile nickname="김은재" src="" />
        <ProfileImage imageUrl="" size="l" />
        <ProfileImage imageUrl="" size="m" />

        <PlannerCard cardType="main" cardInfo={LIST_DATA} />
        <PlannerCard cardType="mypage" cardInfo={MYPAGE_DATA} />
      </div>
    </>
  );
}
