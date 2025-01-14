export const formatDate = (pageType: string, date: Date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const weekday = new Intl.DateTimeFormat('ko-KR', { weekday: 'short' }).format(
    date
  );

  return `${month}.${day}(${weekday})`;
};
/**
 *
 *
 * 몇박몇일 만드는함수
 */
export const calculateTripDuration = ({
  endDate,
  startDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  if (!startDate || !endDate) return null;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const duration =
    Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  return { nights: duration - 1, days: duration };
};

export const generateDays = ({
  startDay,
  endDay,
}: {
  startDay: string;
  endDay: string;
}): PlanDayType[] => {
  const result: PlanDayType[] = [];
  const currentDate = new Date(startDay!);
  const endDate = new Date(endDay!);

  let dayIndex = 1;

  while (currentDate <= endDate) {
    const formattedDate = currentDate.toISOString().split('T')[0];
    result.push({
      day: dayIndex,
      cost: 0,
      date: formattedDate,
      detail: [],
    });
    currentDate.setDate(currentDate.getDate() + 1);
    dayIndex++;
  }

  return result;
};
