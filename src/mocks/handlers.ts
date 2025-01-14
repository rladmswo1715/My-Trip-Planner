import { http, HttpResponse } from 'msw';
import testImg from '@/assets/img/test-img.png';

export const handlers = [
  http.get('/api/myplannersPosts', () => {
    return HttpResponse.json([
      {
        planId: 1,
        title: '제주 동쪽 2박 3일 여행1',
        created_at: new Date('2025-01-01'),
        thumbnail: testImg,
        categories: ['애월', '협재', '서귀포'],
        status: 'PUBLIC',
      },
      {
        planId: 2,
        title: '제주 동쪽 2박 3일 여행2',
        created_at: new Date('2025-01-01'),
        thumbnail: testImg,
        categories: ['애월', '협재', '서귀포'],
        status: 'PUBLIC',
      },
      {
        planId: 3,
        title: '제주 동쪽 2박 3일 여행3',
        created_at: new Date('2025-01-01'),
        thumbnail: testImg,
        categories: ['애월', '협재', '서귀포'],
        status: 'PUBLIC',
      },
      {
        planId: 4,
        title: '제주 동쪽 2박 3일 여행4',
        created_at: new Date('2025-01-01'),
        thumbnail: testImg,
        categories: ['애월', '협재', '서귀포'],
        status: 'PUBLIC',
      },
    ]);
  }),
];
