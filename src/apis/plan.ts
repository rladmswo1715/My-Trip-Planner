import { TPlanInfo } from '@/types/responseData/detailedPlan';

export const getPlanInfo = async (
  planId: number,
  accessToken: string
): Promise<TPlanInfo> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_IP}/plans/${planId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();

      throw {
        message: errorData.message || '플랜 불러오기 실패',
      };
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchToggleStatus = async (
  { planId, status }: { planId: number; status: 'PUBLIC' | 'PRIVATE' },
  accessToken: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_IP}/plans/${planId}/status`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ status }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw {
        message: errorData.message || '게시글 상태 변경 실패',
      };
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
