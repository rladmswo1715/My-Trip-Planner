import PeopleSelect from '../plan-setting-step/plan-setting-date/PeopleSelect';
import Dropdown from '../common/Dropdown';
import { useFilterStore } from '@/stores/filterStores';
import { dateFilter } from '@/constants/searchDateFilter';
import { useCallback, useRef, useState } from 'react';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import BackButton from '../auth/login/BackButton';

interface DateFilterContentProps {
  title: string;
  onClose: () => void;
}

const DateFilterContent = ({ title, onClose }: DateFilterContentProps) => {
  const { date } = useFilterStore();
  const peopleRef = useRef(null);
  const { setNumberOfPeople: setPeople, numberOfPeople: people } =
    useFilterStore((state) => state.date);
  const [isPeopleSelectActive, setPeopleSelectActive] = useState(false);

  const handleSearchChange = useCallback(
    (term: string) => {
      setPeople(Number(term));
    },
    [setPeople]
  );

  const handleOpenState = () => {
    setPeopleSelectActive(true);
  };

  useOutsideClick(peopleRef, () => {
    setPeopleSelectActive(false);
  });

  return (
    <div className="h-full relative w-full">
      <div className="flex justify-between items-center">
        <span className="leading-[4.2rem] text-[2.8rem] font-bold">
          {title}
        </span>
        <BackButton onClose={onClose} />
      </div>

      <div className="flex flex-col mt-[2.8rem] gap-[1.2rem] w-[48%]">
        <span className="text-[2rem] text-black leading-[2.6rem]">기간</span>
        <Dropdown
          title={date.selectedDate ? date.selectedDate : '기간 선택'}
          list={dateFilter}
          onSelect={date.setDate}
        />
      </div>

      <div className="w-full mt-[5rem]">
        <PeopleSelect
          ref={peopleRef}
          people={people}
          state={isPeopleSelectActive}
          title="0명"
          handleOnChangePeople={handleSearchChange}
          isEditing={isPeopleSelectActive}
          handleOpenState={handleOpenState}
          isFilterType
        />
      </div>
    </div>
  );
};

export default DateFilterContent;
