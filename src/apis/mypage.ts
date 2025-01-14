import { BASE_URL } from '@/constants/urls';
import { TMyPlanners } from '@/types/responseData/mypage';

// 백엔드 에러 명세서 알려주면 에러처리 수정하기

export const getMyPlanners = async (
  currentPage: number
): Promise<TMyPlanners> => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/myplan?currentPage=${currentPage}&pageSize=6`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();

      throw {
        message: errorData.message || '내 일정 불러오기 실패',
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDibsPlanners = async (
  currentPage: number
): Promise<TMyPlanners> => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/bookmarks?currentPage=${currentPage}&pageSize=6`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();

      throw {
        message: errorData.message || '찜한 일정 불러오기 실패',
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
