import Chip from '@/components/common/Chip';
import { usePlanStore } from '@/stores/planStores';
import { formatDatePicker } from '@/utils/dateUtils';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StartSelect = () => {
  const { setStartDay: setSelectStartDay, startDay } = usePlanStore(
    (state) => state.date
  );

  return (
    <div className="flex-1 flex flex-col gap-[1.2rem] relative">
      <span className="leading-[2.6rem] text-[2rem]">가는 날</span>

      <div className="relative">
        <DatePicker
          selected={new Date()}
          onChange={(date) => {
            if (!date) return;
            console.log(date);
            // setStartDate(date!);
            setSelectStartDay(formatDatePicker(date));
            // handleOpenState(null); // 모달 닫기
          }}
          customInput={
            <Chip className="py-[2.4rem] w-full" state={!!startDay}>
              {startDay ? startDay : '날짜 선택'}
            </Chip>
          }
        />
      </div>
    </div>
  );
};

export default StartSelect;
