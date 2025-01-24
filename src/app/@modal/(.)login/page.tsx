import LoginComponent from '@/components/auth/login/LoginComponent';
import StaticModal from '@/components/common/StaticModal';
import React from 'react';

const page = () => {
  return (
    <StaticModal>
      <LoginComponent />
    </StaticModal>
  );
};

export default page;
