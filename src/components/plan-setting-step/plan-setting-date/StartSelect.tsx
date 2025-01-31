import Chip from '@/components/common/Chip';
import { usePlanStore } from '@/stores/planStores';
import { formatDatePicker } from '@/utils/dateUtils';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
const StartSelect = () => {
  const {
    setStartDay: setSelectStartDay,
    startDay,
    endDay,
  } = usePlanStore((state) => state.date);

  return (
    <div className="flex-1 flex flex-col gap-[1.2rem] relative">
      <span className="leading-[2.6rem] text-[2rem]">가는 날</span>

      <div className="relative w-full">
        <DatePicker
          locale={ko}
          selected={new Date()}
          minDate={
            endDay
              ? new Date(
                  new Date(endDay).setDate(new Date(endDay).getDate() - 10)
                )
              : undefined
          }
          maxDate={endDay ? new Date(endDay) : undefined}
          onChange={(date) => {
            if (!date) return;

            setSelectStartDay(formatDatePicker(date));
          }}
          calendarClassName="text-[1.6rem] w-full rounded-[2rem]"
          dateFormat="yyyy년 MM월 dd일"
          popperPlacement="bottom-start"
          customInput={
            <Chip className="py-[2.4rem] w-full" state={!!startDay}>
              {startDay ? startDay : '날짜 선택'}
            </Chip>
          }
          popperClassName="w-full"
          weekDayClassName={(date) => {
            return `${date.getDay() === 0 ? 'text-red' : 'text-white'}`;
          }}
          dayClassName={(date) => {
            const today = new Date();
            const currentMonth = today.getMonth();
            const dateMonth = date.getMonth();

            return `${
              currentMonth !== dateMonth ? 'text-gray-400' : 'text-black'
            } hover:bg-gray-100 rounded-full text-[2rem] py-[1rem]`;
          }}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between px-[0.8rem] py-[1rem] text-white">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="text-var-primary-500 disabled:text-gray-300"
              >
                ◀
              </button>
              <span className="text-[2rem] font-semibold">
                {date.getFullYear()}년 {date.getMonth() + 1}월
              </span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="text-var-primary-500 disabled:text-gray-300"
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
