import { TMypageCardList } from '@/types/card';

interface PlannerMypageCardContentProps {
  cardInfo: TMypageCardList;
}

const PlannerMypageCardContent = ({
  cardInfo,
}: PlannerMypageCardContentProps) => {
  const { title, categories } = cardInfo;

  const formattedPlaceCategory = categories.join('·');

  return (
    <div className="absolute bottom-[1.2rem] left-0 right-0 w-[90.8%] flex flex-col items-start gap-[0.4rem] z-10 mx-auto">
      <h3 className="text-white text-[1.8rem] leading-[2.34rem] font-bold truncate max-w-[95%]">
        {title}
      </h3>

      <p className="text-white text-[1.4rem] leading-[1.82rem]">
        {formattedPlaceCategory}
      </p>
    </div>
  );
};

export default PlannerMypageCardContent;
