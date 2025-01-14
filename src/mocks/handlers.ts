import { http, HttpResponse } from 'msw';
import testImg from '@/assets/img/test-img.png';

export const handlers = [
  http.get('/users/myplan', ({ request }) => {
    const url = new URL(request.url);

    const currentPage = parseInt(
      (url.searchParams.get('currentPage') as string) || '1',
      10
    );
    const pageSize = parseInt(url?.searchParams.get('pageSize') || '6', 10);

    const plans = Array.from({ length: pageSize }, (_, idx) => {
      const planId = (currentPage - 1) * pageSize + idx + 1;
      return {
        planId,
        title: `제주 동쪽 2박 3일 여행 ${planId}`,
        created_at: new Date('2025-01-01'),
        thumbnail: testImg,
        categories: ['애월', '협재', '서귀포'],
        status: 'PUBLIC',
      };
    });

    return HttpResponse.json({
      plans,
      currentPage,
      pageSize,
      totalElements: 100,
      totalPages: 17,
      hasNext: true,
      hasPrevious: false,
      first: true,
      last: false,
    });
  }),

  http.get('/users/bookmarks', ({ request }) => {
    const url = new URL(request.url);

    const currentPage = parseInt(
      (url.searchParams.get('currentPage') as string) || '1',
      10
    );
    const pageSize = parseInt(url?.searchParams.get('pageSize') || '6', 10);

    const plans = Array.from({ length: pageSize }, (_, idx) => {
      const planId = (currentPage - 1) * pageSize + idx + 1;
      return {
        planId,
        title: `찜한 제주 동쪽 2박 3일 여행 ${planId}`,
        created_at: new Date('2025-01-01'),
        thumbnail: testImg,
        categories: ['애월', '협재', '서귀포'],
        status: 'PUBLIC',
      };
    });

    return HttpResponse.json({
      plans,
      currentPage,
      pageSize,
      totalElements: 100,
      totalPages: 17,
      hasNext: true,
      hasPrevious: false,
      first: true,
      last: false,
    });
  }),
];
