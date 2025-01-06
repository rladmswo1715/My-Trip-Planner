import { ICONS } from '@/constants/importImages';
import { TDetailedSchedule } from '@/types/schedule';
import Image from 'next/image';

interface DetailedScheduleProps {
  placesData: TDetailedSchedule[];
}

const DetailedSchedule = ({ placesData }: DetailedScheduleProps) => {
  // 카테고리 코드, 아이콘 나오면 수정
  const switchCategoryIcon = (category: string) => {
    switch (category) {
      case 'AA':

      default:
        return ICONS.iconCategoryTraffic.src;
    }
  };

  return (
    <div className="flex flex-col gap-[4rem] w-[31.5%] max-w-[37.8rem]">
      {placesData.map((item, index) => (
        <div
          key={item.order}
          className="relative flex gap-[2.4rem] items-start"
        >
          <Image
            src={switchCategoryIcon(item.planCategory)}
            width={40}
            height={40}
            alt="카테고리"
            className="z-[1]"
          />
          <div className="flex flex-col gap-[0.4rem]">
            <h3 className="text-[2rem] text-black font-semibold leading-[3rem]">
              {item.placeName}
            </h3>
            <p className="text-[1.6rem] text-black/50 leading-[2.08]">
              {item.streetAddress}
            </p>
          </div>
          {index !== placesData.length - 1 && (
            <div className="absolute left-[1.95rem] top-[2rem] h-[calc(100%+4rem)] border-l-[1px] border-dashed border-black"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailedSchedule;
