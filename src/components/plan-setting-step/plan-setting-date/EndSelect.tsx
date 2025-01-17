import Chip from '@/components/common/Chip';
import { usePlanStore } from '@/stores/planStores';
import { formatDatePicker } from '@/utils/dateUtils';
import React from 'react';
import DatePicker from 'react-datepicker';

const EndSelect = () => {
  const {
    setEndDay: setSelectEndDay,
    endDay,
    startDay,
  } = usePlanStore((state) => state.date);

  return (
    <div className="flex-1 flex flex-col gap-[1.2rem]">
      <span className="leading-[2.6rem] text-[2rem]">오는 날</span>

      <div className="relative">
        <DatePicker
          disabled={!startDay}
          minDate={new Date(startDay!)}
          onChange={(date) => {
            if (!date) return;
            console.log(date);

            // setStartDate(date!);
            setSelectEndDay(formatDatePicker(date));
            // handleOpenState(null); // 모달 닫기
          }}
          customInput={
            <Chip className="py-[2.4rem] w-full" state={!!endDay}>
              {endDay ? endDay : startDay ? '날짜 선택' : '시작 날짜'}
            </Chip>
          }
        />
      </div>
    </div>
  );
};

export default EndSelect;
