interface SlideInfo {
  title: string;
  key: 'mostViewPlans' | 'mostRecentPlans' | 'HongdaeHotPlans';
}

export const SLIDES_INFO: SlideInfo[] = [
  {
    title: '마이트립플래너 추천, 인기 일정',
    key: 'mostViewPlans',
  },
  { title: '최근 일정', key: 'mostRecentPlans' },
  {
    title: '홍대/합정/상수 인기 일정',
    key: 'HongdaeHotPlans',
  },
];
