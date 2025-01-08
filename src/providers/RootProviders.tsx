import React from 'react';
import QueryProviders from './QueryProviders';

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryProviders>{children}</QueryProviders>
    </>
  );
};

export default RootProviders;
