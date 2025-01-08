import { QueryFunction } from '@tanstack/react-query';

type SinglePostPropsType = {
  queryKey: [string, string];
};

const fetchPlaces = async ({
  queryKey,
}: SinglePostPropsType): Promise<PlaceAPIType> => {
  const [, query] = queryKey;

  const response = await fetch(
    `https://dapi.kakao.com/v2/local/search/address?query=${encodeURIComponent(
      query
    )}`,

    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      },
    }
  );
  console.log('query길이 : ' + query.length, '동작중');
  if (!response.ok) {
    throw new Error('실패');
  }
  const data = await response.json();
  return data;
};

export const useSearchPlaces = (query: string, enabled?: boolean) => {
  console.log(enabled);
  const queryKey: [_1: string, _2: string] = ['searchPlaces', query];
  const queryFn:
    | QueryFunction<PlaceAPIType, [_1: string, _2: string], never>
    | undefined = async ({ queryKey }) => {
    return fetchPlaces({ queryKey });
  };

  return {
    queryKey,
    queryFn,
    enabled,
    options: { staleTime: 1000 * 60 * 5 },
  };
};
