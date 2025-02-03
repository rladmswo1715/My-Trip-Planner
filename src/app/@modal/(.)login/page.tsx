import LoginComponent from '@/components/auth/login/LoginComponent';
import StaticModal from '@/components/common/StaticModal';
import React from 'react';

const Page = () => {
  return (
    <StaticModal>
      <LoginComponent />
    </StaticModal>
  );
};

export default Page;
