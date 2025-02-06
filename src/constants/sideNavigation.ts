import { TNAV_OPTIONS } from '@/types/sideNavigation';

export const NAV_OPTIONS: TNAV_OPTIONS[] = [
  {
    category: '나의 트립 플랜',
    listItems: [
      {
        title: '내 여행 일정',
        urlPath: 'my-planners',
        order: 1,
      },
      {
        title: '찜한 일정',
        urlPath: 'dibs-planners',
        order: 2,
      },
      {
        title: '임시 저장',
        urlPath: 'storage',
        order: 4,
      },
    ],
  },
  {
    category: '내 활동',
    listItems: [
      {
        title: '내가 쓴 댓글',
        urlPath: 'my-comments',
        order: 3,
      },
    ],
  },
  // {
  //   category: '기타',
  //   listItems: [
  //     {
  //       title: '문의사항',
  //       urlPath: 'inquiry',
  //     },
  //   ],
  // },
];
