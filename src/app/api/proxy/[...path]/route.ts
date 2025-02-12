import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const cookieStore = await cookies();
  const path = (await params).path;
  console.log('path', path);
  const accessToken = cookieStore.get('accessToken')?.value;
  const backendUrl = process.env.NEXT_PUBLIC_SERVER_IP || '';

  try {
    // 백엔드로 요청 보내기
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        Authorization: `Bearer ${accessToken ?? ''}`,
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined, // GET이면 body 없음
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ 프록시 오류:', error);
    return NextResponse.json(
      { error: '프록시 서버 오류 발생' },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//   const cookieStore = await cookies();
//   try {
//     const accessToken = cookieStore.get('accessToken')?.value;

//     if (!accessToken) {
//       return NextResponse.json({ error: '토큰없음' }, { status: 401 });
//     }

//     const form = await req.formData();
//     const planData = form.get('plan');
//     const thumbnail = form.get('thumbnail') as File | null;

//     if (!planData) {
//       return NextResponse.json({ error: 'plan 데이터 없음' }, { status: 400 });
//     }

//     const jsonBlob = new Blob([planData as string], {
//       type: 'application/json',
//     });
//     const formData = new FormData();
//     formData.append('plan', jsonBlob);
//     if (thumbnail) {
//       formData.append('thumbnail', thumbnail);
//     }

//     // if (!targetUrl) {
//     //   return NextResponse.json({ error: 'url 잘못' }, { status: 400 });
//     // }

//     const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_IP}/plans`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       body: formData,
//     });
//     if (!response.ok) {
//       throw new Error('실패');
//     }
//     const responseBody = await response.json();
//     return NextResponse.json(responseBody, { status: response.status });
//   } catch {
//     return NextResponse.json({ error: '서버 에러' }, { status: 500 });
//   }
// }
