'use client';
import React from 'react';
import HeaderProfile from '../HeaderProfile';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useGetProfile } from '@/lib/hooks/queries/useGetProfile';

const AuthProfile = () => {
  const { data, isError, error } = useQuery(useGetProfile());

  const LoginButtonLender = (
    <Link href={'/login'}>
      <span className="text-[2rem] leading-[2.5rem] font-normal text-white">
        로그인
      </span>
    </Link>
  );

  if (isError || !data?.data) {
    console.log(error);
    return LoginButtonLender;
  }
  return <HeaderProfile nickname={data?.data?.nickname} src="" />;
};

export default AuthProfile;
