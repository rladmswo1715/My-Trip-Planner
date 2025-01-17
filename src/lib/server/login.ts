export const socialLogin = async (social: 'kakao' | 'naver' | 'google') => {
  'use server';
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_IP}/users/signin/${social}`,
    { method: 'POST', credentials: 'include' }
  );

  if (!response.ok) throw new Error('로그인 요청 실패');
};
