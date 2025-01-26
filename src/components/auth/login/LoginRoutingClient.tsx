'use client';
import { useRouter, useSearchParams } from 'next/navigation';

import React, { useEffect } from 'react';

const LoginRoutingClient = () => {
  const searchParams = useSearchParams();
  const rotuer = useRouter();
  useEffect(() => {
    if (searchParams.get('sign')) {
      rotuer.replace('/login');
    }
  }, [rotuer, searchParams]);
  return <></>;
};

export default LoginRoutingClient;
