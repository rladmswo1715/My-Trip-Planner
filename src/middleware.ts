import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // const cookies = req
  // const cookieStore = await cookies();
  // // if (
  // //   request.nextUrl.pathname.startsWith('/oauth') &&
  // //   !!cookieStore.get('accessToken')
  // // ) {
  // //   return NextResponse.redirect(new URL('/', request.url));
  // // }
  if (pathname === '/plan/create') {
    // if (searchParams.get('setup') === 'true') {
    //   const url = request.nextUrl.clone();
    //   url.searchParams.delete('setup');
    //   console.log(url);
    //   return NextResponse.rewrite(url);
    // }
    // return NextResponse.redirect(new URL('/', request.url));
  }
}

// export const config = {
//   matcher: ['/'], // 특정 경로에만 적용
// };
