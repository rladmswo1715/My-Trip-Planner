import { NextResponse } from 'next/server';

export const refreshTokenGetToken = async ({
  refreshToken,
  socialId,
  accessToken,
}: {
  accessToken: string;
  refreshToken: string;
  socialId: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_IP}/token/reissue/${socialId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Authorization_refresh: `Bearer ${refreshToken}`,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: '재발급실패' }, { status: 403 });
    }

    return res;
  } catch {
    return NextResponse.json({ error: '서버에러' }, { status: 500 });
  }
};
