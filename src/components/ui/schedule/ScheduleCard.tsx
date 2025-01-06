import DetailedSchedule from './DetailedSchedule';
import { formatDate } from '@/utils/dateUtils';
import { personalCostCalc } from '@/utils/costUtils';
import { TDetailedSchedule } from '@/types/schedule';

interface ScheduleCardProps {
  day: number;
  people: number;
  scheduleData: {
    date: Date;
    cost: number;
    places: TDetailedSchedule[];
  };
}

const ScheduleCard = ({ day, people, scheduleData }: ScheduleCardProps) => {
  return (
    <div>
      <div className="flex flex-col gap-[1.6rem] text-[2rem] text-black leading-[3rem]">
        <div className="flex gap-[0.8rem] items-center">
          <h2 className="text-[2.4rem] font-semibold leading-[2.864rem]">
            Day {day}
          </h2>
          <p className="text-black/50">
            {formatDate('schedule', scheduleData.date)}
          </p>
        </div>
        <p className="flex gap-[1.2rem]">
          <span className="font-semibold">예상비용</span>
          <span className="text-black/70">
            {scheduleData?.cost.toLocaleString()}원 (1인{' '}
            {personalCostCalc(people, scheduleData?.cost)}원)
          </span>
        </p>
      </div>

      <div className="relative flex justify-between gap-[8rem] mt-[3.6rem] min-h-[35.2rem]">
        <DetailedSchedule placesData={scheduleData.places} />
        <div className="flex-grow">지도</div>
      </div>
    </div>
  );
};

export default ScheduleCard;
