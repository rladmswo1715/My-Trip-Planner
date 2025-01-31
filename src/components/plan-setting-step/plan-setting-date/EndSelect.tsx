import Chip from '@/components/common/Chip';
import { usePlanStore } from '@/stores/planStores';
import { formatDatePicker } from '@/utils/dateUtils';
import { ko } from 'date-fns/locale';
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

      <div className="relative w-full">
        <DatePicker
          locale={ko}
          selected={new Date()}
          disabled={!startDay}
          minDate={new Date(startDay!)}
          maxDate={
            new Date(
              new Date(startDay!).setDate(new Date(startDay!).getDate() + 10)
            )
          }
          onChange={(date) => {
            if (!date) return;
            console.log(date);
            setSelectEndDay(formatDatePicker(date));
          }}
          calendarClassName="text-[1.6rem] w-full rounded-[2rem]"
          dateFormat="yyyy년 MM월 dd일"
          popperPlacement="bottom-start"
          customInput={
            <Chip className="py-[2.4rem] w-full" state={!!endDay}>
              {endDay ? endDay : startDay ? '날짜 선택' : '시작 날짜'}
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

export default EndSelect;
