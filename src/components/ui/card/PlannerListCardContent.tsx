import { TMainCardList } from '@/types/card';

interface PlannerListCardContentProps {
  cardInfo: TMainCardList;
}

const transportationMap: Record<string, string> = {
  PUBLIC_TRANSPORT: '대중교통',
  CAR: '자차',
};

const PlannerListCardContent = ({ cardInfo }: PlannerListCardContentProps) => {
  const { title, placeCategory, people, transportation, totalCost } = cardInfo;

  const formattedPlaceCategory = placeCategory.join('·');
  const formattedTransportation = transportationMap[transportation] || '';
  const personalCost = Math.round(totalCost / people / 10) * 10; // 1의자리 반올림

  return (
    <div className="absolute bottom-[1.2rem] left-0 right-0 w-[91.8%] flex flex-col items-center gap-[0.4rem] z-10 mx-auto text-white">
      <div className="flex justify-between items-center w-full">
        <h3 className="font-bold  text-[1.8rem] leading-[2.34rem] truncate max-w-[63%]">
          {title}
        </h3>
        <p className="text-[1.4rem] leading-[1.82rem] truncate max-w-[35%]">
          {formattedPlaceCategory}
        </p>
      </div>

      <div className="w-full">
        <p className="text-[1.4rem] leading-[1.82rem] flex justify-between items-center ">
          {/* 날짜는 상세날짜 받아오는지에 따라 수정 필요 */}
          <span>12.23-12.26</span>
          <span>
            {people}인·{formattedTransportation}
          </span>
          <span>{personalCost.toLocaleString()}원(인당)</span>
        </p>
      </div>
    </div>
  );
};

export default PlannerListCardContent;
