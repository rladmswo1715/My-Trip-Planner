import { http, HttpResponse } from 'msw';
import testImg from '@/assets/img/test-img.png';

export const handlers = [
  http.get('/home', () => {
    const mostViewPlans = Array.from({ length: 10 }, (_, index) => {
      const id = index + 1;
      return {
        title: `인기 슬라이드${id}`,
        placeCategory: ['애월', '협제', '서귀포'],
        startDate: new Date(2024, 1, 2).toISOString().split('T')[0],
        endDate: new Date(2024, 2, 4).toISOString().split('T')[0],
        people: 3,
        transportation: 'PUBLIC',
        totalCost: 1000000,
        thumbnail: testImg,
      };
    });
    const mostRecentPlans = Array.from({ length: 10 }, (_, index) => {
      const id = index + 1;
      return {
        title: `최근 슬라이드${id}`,
        placeCategory: ['수원', '용인', '화성'],
        startDate: new Date(2025, 0, 1).toISOString().split('T')[0],
        endDate: new Date(2025, 0, 4).toISOString().split('T')[0],
        people: 3,
        transportation: 'PUBLIC',
        totalCost: 1000000,
        thumbnail: testImg,
      };
    });
    const HongdaeHotPlans = Array.from({ length: 3 }, (_, index) => {
      const id = index + 1;
      return {
        title: `홍대 슬라이드${id}`,
        placeCategory: ['홍대'],
        startDate: new Date(2024, 0, 1).toISOString().split('T')[0],
        endDate: new Date(2024, 0, 4).toISOString().split('T')[0],
        people: 3,
        transportation: 'CAR',
        totalCost: 1000000,
        thumbnail: testImg,
      };
    });

    return HttpResponse.json({
      mostViewPlans,
      mostRecentPlans,
      HongdaeHotPlans,
    });
  }),

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
  http.get('/plans/search', ({ request }) => {
    const url = new URL(request.url);

    const sortBy = url.searchParams.get('sortBy');
    const direction = url.searchParams.get('direction');
    const lastValue = url.searchParams.get('lastValue');
    const lastId = parseInt(url.searchParams.get('lastId') as string) || 0;
    const day = url.searchParams.get('day');
    const transportCategoryName = url.searchParams.get('transportCategoryName');
    const people = url.searchParams.get('people');
    const categoryNames = url.searchParams.getAll('categoryNames');
    const keyword = url.searchParams.get('keyword');
    console.log('핸들러', {
      lastId,
      sortBy,
      direction,
      lastValue,
      categoryNames,
    });

    const allPlans = Array.from({ length: 20 }, (_, i) => ({
      planId: i + 1,
      title: `여행 계획 ${i + 1}`,
      thumbnail: testImg,
      placeCategory: ['강남/서초-1'],
      startDate: new Date(
        `2025-07-${String(i + 1).padStart(2, '0')}`
      ).toISOString(),
      endDate: new Date(
        `2025-07-${String(i + 3).padStart(2, '0')}`
      ).toISOString(),
      people: Math.floor(Math.random() * 5) + 1,
      transportation: ['CAR', 'PUBLIC'][i % 11],
      totalCost: (i + 1) * 10000,
      viewCount: Math.floor(Math.random() * 1000),
    }));

    let filteredPlans = allPlans;

    if (keyword) {
      filteredPlans = filteredPlans.filter((plan) =>
        plan.title.includes(keyword)
      );
    }

    if (transportCategoryName) {
      filteredPlans = filteredPlans.filter(
        (plan) => plan.transportation === transportCategoryName
      );
    }

    if (people) {
      filteredPlans = filteredPlans.filter(
        (plan) => plan.people === parseInt(people)
      );
    }

    if (categoryNames.length > 0) {
      filteredPlans = filteredPlans.filter((plan) => {
        return categoryNames.some((name) => plan.placeCategory.includes(name));
      });
    }

    if (day) {
      filteredPlans = filteredPlans.filter((plan) => {
        const startDate = new Date(plan.startDate);
        const endDate = new Date(plan.endDate);
        const duration =
          (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        return duration <= parseInt(day);
      });
    }

    const startIndex =
      lastId === null
        ? 0
        : filteredPlans.findIndex((plan) => plan.planId === lastId) + 1;

    const effectiveStartIndex = Math.max(startIndex, 0);

    const paginatedPlans = filteredPlans.slice(
      effectiveStartIndex,
      effectiveStartIndex + 16
    );

    const hasNext = effectiveStartIndex + 16 < filteredPlans.length;
    return HttpResponse.json({
      plans: paginatedPlans,
      hasNext,
      nextValue: '10',
      nextId: paginatedPlans.length
        ? paginatedPlans[paginatedPlans.length - 1].planId
        : null,
      total: filteredPlans.length,
    });
  }),
];
