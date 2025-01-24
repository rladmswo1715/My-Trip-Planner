import { fetchWithProxy } from '@/lib/server';
import { QueryFunction } from '@tanstack/react-query';

const fetchProfile = async (): Promise<SuccessCode<Profile | null>> => {
  const response = await fetchWithProxy(
    `${process.env.NEXT_PUBLIC_SERVER_IP}/users/profile`
  );

  if (!response || 'error' in response) {
    return { code: 401, data: null, message: '비로그인 상태', status: false };
  }

  const data: SuccessCode<Profile | null> = await response.json();
  return data;
};

export const useGetProfile = (enabled?: boolean) => {
  const queryKey: [_1: string] = ['profiles'];
  const queryFn:
    | QueryFunction<SuccessCode<Profile | null>, [_1: string], never>
    | undefined = async () => {
    return fetchProfile();
  };

  return {
    queryKey,
    queryFn,
    enabled,
    option: {
      retry: false,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
    },
  };
};
