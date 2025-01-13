import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

export const config = {
  matcher: ['/plan/create'], // 특정 경로에만 적용
};
