import Chip from '@/components/common/Chip';
import { useDateStore } from '@/stores/planStores';
import React from 'react';

type StartSelectProps = {
  state: boolean;
  handleOpenState: (e: 'start' | 'end' | 'numberOfPeople' | null) => void;
};

const StartSelect = ({}: StartSelectProps) => {
  const setSelectStartDay = useDateStore((state) => state.setStartDay);
  const { startDay } = useDateStore();
  return (
    <div className="grow flex flex-col gap-[1.2rem]">
      <span className="leading-[2.6rem] text-[2rem]">가는 날</span>
      <Chip
        // onClick={() => handleOpenState('start')}
        onClick={() => setSelectStartDay('2013-3-3')}
        className="py-[2.4rem]"
        state={!!startDay}
      >
        {startDay ? startDay : '날짜 선택'}
      </Chip>
    </div>
  );
};

export default StartSelect;
