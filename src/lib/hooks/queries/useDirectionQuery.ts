import { QueryFunction } from '@tanstack/react-query';

export const fetchRouteData = async (
  details: PlanDetailType[]
): Promise<DirectionsResponse> => {
  if (!details || details.length < 2) {
    throw new Error('출발지와 목적지는 최소 2개 이상의 위치가 필요합니다.');
  }

  const API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const origin = `${details[0].longitude},${details[0].latitude}`;
  const destination = `${details[details.length - 1].longitude},${
    details[details.length - 1].latitude
  }`;
  const waypoints = details
    .slice(1, details.length - 1)
    .map((detail) => `${detail.longitude},${detail.latitude}`)
    .join('|');

  const response = await fetch(
    `https://apis-navi.kakaomobility.com/v1/directions?origin=${origin}&destination=${destination}&waypoints=${waypoints}&priority=RECOMMEND`,
    {
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('경로 데이터를 가져오지 못했습니다.');
  }

  return response.json();
};

export const useDirections = (
  details: PlanDetailType[],
  day: number,
  enabled: boolean = true
) => {
  const queryKey: [string, number, PlanDetailType] = [
    'directions',
    day,
    details[details.length - 1],
  ];
  const queryFn: QueryFunction<DirectionsResponse, typeof queryKey> = async (
    {
      // queryKey,
    }
  ) => {
    // const [, day] = queryKey;
    return fetchRouteData(details);
  };

  return {
    queryKey,
    queryFn,
    enabled,
    option: {
      enabled: enabled && details.length > 1,
      staleTime: 1000 * 60 * 5,
      retry: 2, // 실패 시 2번 재시도
    },
  };
};
