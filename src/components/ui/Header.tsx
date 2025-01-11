'use client';

import Link from 'next/link';
import LogoWithText from './LogoWithText';
import { useState } from 'react';
import HeaderProfile from './HeaderProfile';

const NAV_LIST = [
  {
    title: '여행 일정',
    link: '/',
  },
  {
    title: '내 여행 계획하기',
    link: '/',
  },
];

const Header = () => {
  const [isLogin] = useState(true); //임시

  const LoginButtonLender = (
    <button>
      <span className="text-[2rem] leading-[2.5rem] font-normal text-white">
        로그인
      </span>
    </button>
  );

  return (
    <header className="w-full bg-var-primary-500">
      <div className="flex justify-between max-w-[132.8rem] w-full mx-auto items-center py-[3.2rem] px-[2.4rem]">
        <div className="flex items-center gap-[6rem]">
          <Link href="/">
            <LogoWithText />
          </Link>
          <nav className="flex gap-[6rem]">
            {NAV_LIST.map((item) => (
              <Link
                key={item.title}
                href="/"
                className="text-[2.4rem] text-white font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          {isLogin ? (
            <HeaderProfile nickname="홍길동" src="" />
          ) : (
            LoginButtonLender
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
