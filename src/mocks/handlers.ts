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
        created_at: new Date('2025-01-01').toISOString(),
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
        created_at: new Date('2025-01-01').toISOString(),
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
  http.get('/users/comments', ({ request }) => {
    const url = new URL(request.url);

    const currentPage = parseInt(
      (url.searchParams.get('currentPage') as string) || '1',
      10
    );
    const pageSize = parseInt(url?.searchParams.get('pageSize') || '6', 10);

    const comments = Array.from({ length: pageSize }, (_, idx) => {
      const commentId = (currentPage - 1) * pageSize + idx + 1;
      return {
        commentId: commentId,
        planId: 1,
        title: `제주 동쪽 2박 3일 여행`,
        category: ['애월', '협재', '서귀포'],
        created_at: new Date('2025-01-01').toISOString(),
        content: `잘 봤습니다.${commentId}`,
      };
    });

    return HttpResponse.json({
      comments,
      currentPage,
      pageSize,
      totalElements: 35,
      totalPages: 6,
      hasNext: currentPage < 6,
      hasPrevious: currentPage > 1,
      first: currentPage === 1,
      last: currentPage === 6,
    });
  }),
];
