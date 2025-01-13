import DetailedSchedule from './DetailedSchedule';
import { formatDate } from '@/utils/dateUtils';
import { personalCostCalc } from '@/utils/costUtils';
import KakaoMap from '@/components/maps/KakaoMap';

interface ScheduleCardProps {
  day: number;
  people: number;
  date: Date;
  scheduleData?: PlanDayType;
}

const ScheduleCard = ({
  day,
  people,
  scheduleData,
  date,
}: ScheduleCardProps) => {
  return (
    <div>
      <div className="flex flex-col gap-[1.6rem] text-[2rem] text-black leading-[3rem]">
        <div className="flex gap-[0.8rem] items-center">
          <h2
            className="text-[2.4rem] font-semibold leading-[2.864rem]"
            id={`Day${day}`}
          >
            Day {day}
          </h2>

          <p className="text-black/50">{formatDate('schedule', date)}</p>
        </div>
        {scheduleData && (
          <p className="flex gap-[1.2rem]">
            <span className="font-semibold">예상비용</span>
            <span className="text-black/70">
              {scheduleData?.cost.toLocaleString()}원 (1인{' '}
              {personalCostCalc(people, scheduleData?.cost)}원)
            </span>
          </p>
        )}
      </div>

      {scheduleData?.detail && scheduleData?.detail.length > 0 && (
        <div className="relative flex justify-between gap-[8rem] mt-[3.6rem] min-h-[35.2rem]">
          <DetailedSchedule placesData={scheduleData.detail} />
          <div className="flex-grow w-full z-50">
            <KakaoMap detail={scheduleData.detail} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleCard;
