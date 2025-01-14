import PlannerCard from '@/components/ui/card/PlannerCard';
import { TMypageCardList } from '@/types/card';

interface CardListProps {
  listItems: TMypageCardList[];
}

const CardList = ({ listItems }: CardListProps) => {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-y-[2.4rem]">
      {listItems.map((item) => {
        return (
          <div key={item.planId} className="flex justify-center">
            <PlannerCard cardType="mypage" cardInfo={item} />
          </div>
        );
      })}
    </section>
  );
};

export default CardList;
