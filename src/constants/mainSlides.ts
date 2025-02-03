interface SlideInfo {
  title: string;
  key: 'mostViewPlans' | 'mostRecentPlans' | 'hotPlacePlans';
}

export const SLIDES_INFO: SlideInfo[] = [
  {
    title: '마이트립플래너 추천, 인기 일정',
    key: 'mostViewPlans',
  },
  { title: '최근 일정', key: 'mostRecentPlans' },
  {
    title: '강남 인기 일정',
    key: 'hotPlacePlans',
  },
];
