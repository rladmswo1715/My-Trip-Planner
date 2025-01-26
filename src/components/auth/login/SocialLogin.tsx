'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import btn_google from '@/assets/img/btn_google.png';
import btn_kakao from '@/assets/img/btn_kakao.png';
import btn_naver from '@/assets/img/btn_naver.png';

const SocialArray: {
  name: 'kakao' | 'google' | 'naver';
  image: StaticImageData;
}[] = [
  {
    name: 'kakao',
    image: btn_kakao,
  },
  {
    name: 'naver',
    image: btn_naver,
  },
  {
    name: 'google',
    image: btn_google,
  },
];

const SocialLogin = () => {
  const ButtonHandler = (social: 'kakao' | 'google' | 'naver') => {
    switch (social) {
      case 'google':
        window.location.href = `${process.env.NEXT_PUBLIC_SERVER_IP}/oauth2/authorization/google`;
        return;
      case 'kakao':
        window.location.href = `${process.env.NEXT_PUBLIC_SERVER_IP}/oauth2/authorization/kakao`;
        return;
      case 'naver':
        window.location.href = `${process.env.NEXT_PUBLIC_SERVER_IP}/oauth2/authorization/naver`;
        return;
    }
  };

  return (
    <div className="flex flex-col gap-[1.2rem]">
      {SocialArray.map((e) => (
        <div
          className="cursor-pointer"
          key={e.name}
          onClick={() => ButtonHandler(e.name)}
        >
          <Image src={e.image} alt={`${e.name} 로그인버튼`} />
        </div>
      ))}
    </div>
  );
};

export default SocialLogin;
