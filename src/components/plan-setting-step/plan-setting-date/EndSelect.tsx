import Chip from '@/components/common/Chip';
import { usePlanStore } from '@/stores/planStores';
import React from 'react';

type EndSelectProps = {
  state: boolean;
  handleOpenState: (e: 'start' | 'end' | 'numberOfPeople' | null) => void;
};

const EndSelect = ({}: EndSelectProps) => {
  const { setEndDay: setSelectEndDay, endDay } = usePlanStore(
    (state) => state.date
  );

  return (
    <div className="grow flex flex-col gap-[1.2rem]">
      <span className="leading-[2.6rem] text-[2rem]">오는 날</span>
      <Chip
        // onClick={() => handleOpenState('end')}
        onClick={() => setSelectEndDay('2013-3-14')}
        className="py-[2.4rem]"
        state={!!endDay}
      >
        {endDay ? endDay : '날짜 선택'}
      </Chip>
    </div>
  );
};

export default EndSelect;
