export const formatDate = (pageType: string, date: Date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const weekday = new Intl.DateTimeFormat('ko-KR', { weekday: 'short' }).format(
    date
  );

  return `${month}.${day}(${weekday})`;
};
