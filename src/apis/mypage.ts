import { BASE_URL } from '@/constants/urls';
import { TMyComments, TMyPlanners } from '@/types/responseData/mypage';

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

export const getMyComments = async (
  currentPage: number
): Promise<TMyComments> => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/comments?currentPage=${currentPage}&pageSize=3`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();

      throw {
        message: errorData.message || '내 댓글 불러오기 실패',
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchEditProfile = async (
  profileFormData: FormData,
  accessToken: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_IP}/users/profile`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: profileFormData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw {
        message: errorData.message || '프로필 수정 실패',
      };
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
