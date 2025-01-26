import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const targetUrl = req.nextUrl.searchParams.get('targetUrl');
  if (!accessToken) {
    return NextResponse.json({ error: '토큰없음' }, { status: 401 });
  }

  if (!targetUrl) {
    return NextResponse.json({ error: 'url 잘못' }, { status: 405 });
  }

  const response = await fetch(targetUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  try {
    const accessToken = cookieStore.get('accessToken')?.value;

    if (!accessToken) {
      return NextResponse.json({ error: '토큰없음' }, { status: 401 });
    }

    const { targetUrl, ...body } = await req.json();

    if (!targetUrl) {
      return NextResponse.json({ error: 'url 잘못' }, { status: 400 });
    }

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    const responseBody = await response.json();
    return NextResponse.json(responseBody, { status: response.status });
  } catch {
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}
