'use client';

import Loading from '@/components/common/Loading';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/?sign=true');
  }, [router]);
  return <Loading />;
};

export default Page;
