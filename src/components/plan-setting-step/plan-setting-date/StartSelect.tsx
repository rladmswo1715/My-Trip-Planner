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

      <div className="relative w-full">
        <DatePicker
          selected={new Date()}
          onChange={(date) => {
            if (!date) return;
            console.log(date);
            // setStartDate(date!);
            setSelectStartDay(formatDatePicker(date));
            // handleOpenState(null); // 모달 닫기
          }}
          className="text-[16px]"
          calendarClassName="custom-datepicker"
          // monthClassName={() => 'w-full'}
          dateFormat="yyyy년 MM월 dd일"
          popperPlacement="bottom-start"
          customInput={
            <Chip className="py-[2.4rem] w-full" state={!!startDay}>
              {startDay ? startDay : '날짜 선택'}
            </Chip>
          }
          popperClassName="w-full"
          dayClassName={() =>
            'text-black hover:bg-gray-100 rounded-full p-[1rem] w-[3.6rem] h-[3.6rem]'
          }
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="text-gray-600 disabled:text-gray-300"
              >
                ◀
              </button>
              <span className="text-lg font-semibold">
                {date.getFullYear()}년 {date.getMonth() + 1}월
              </span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="text-gray-600 disabled:text-gray-300"
              >
                ▶
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default StartSelect;
