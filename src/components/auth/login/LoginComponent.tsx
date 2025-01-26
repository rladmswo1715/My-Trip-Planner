import Image from 'next/image';
import React from 'react';
import loginImg from '@/assets/img/login-img.png';
import SocialLogin from './SocialLogin';

const LoginComponent = () => {
  return (
    <section className="relative w-full h-full flex flex-col justify-between">
      {/* 이미지 */}
      <div className="w-full h-[23rem] overflow-hidden rounded-[2rem]">
        <Image src={loginImg} alt="login" className="object-cover" />
      </div>

      {/* 텍스트 */}
      <div className="flex flex-col justify-center items-center select-none">
        <span className="text-[3.2rem] font-bold leading-[4.8rem]">
          마이트립플래너
        </span>
        <span className="text-[2rem] leading-[2.6rem] opacity-50">
          로그인하고 여행 일정을 완성하세요!
        </span>
      </div>

      {/* 버튼 */}
      <SocialLogin />
    </section>
  );
};

export default LoginComponent;
