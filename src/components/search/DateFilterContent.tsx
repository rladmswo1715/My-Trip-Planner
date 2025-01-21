import { useFilterStore } from '@/stores/filterStores';
import Dropdown from '../common/Dropdown';
import { dateFilter } from '@/constants/searchDateFilter';

interface DateFilterContentProps {
  title: string;
}

const DateFilterContent = ({ title }: DateFilterContentProps) => {
  const { date } = useFilterStore();

  return (
    <div className="flex flex-col h-full gap-[2rem] relative w-full">
      <div>
        <span className="leading-[4.2rem] text-[2.8rem] font-bold">
          {title}
        </span>

        <div className="flex flex-col mt-[2.8rem] gap-[1.2rem] w-[48%]">
          <span className="text-[2rem] text-black leading-[2.6rem]">기간</span>
          <Dropdown
            title={date.selectedDate ? date.selectedDate : '기간 선택'}
            list={dateFilter}
            onSelect={date.setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default DateFilterContent;
