type FetchError = {
  status: number;
  error: string;
};
// 서버컴포넌트에서 패치시 필요없음
export const fetchWithProxy = async (
  targetUrl: string,
  options: RequestInit = {}
): Promise<Response | FetchError> => {
  const method = options?.method || 'GET';

  const url =
    method === 'GET'
      ? `/api/proxy?targetUrl=${encodeURIComponent(targetUrl)}`
      : '/api/proxy';
  const response = await fetch(url, {
    ...options,
    method,
    credentials: 'include',
    headers: {
      ...options.headers,
    },
    ...(method !== 'GET' && { body: JSON.stringify(options.body) }),
  });

  if (response.status === 401) {
    const res = await fetch('/api/token');
    if (!res.ok && res.status === 400) {
      return { status: 400, error: '리프레시토큰없음' };
    }

    const response = await fetch(url, {
      ...options,
      method,
      credentials: 'include',
      headers: {
        ...options.headers,
      },
      ...(method !== 'GET' && { body: JSON.stringify(options.body) }),
    });

    return response;
  }

  if (!response.ok) {
    return { status: response.status, error: response.statusText };
  }

  return response;
};
