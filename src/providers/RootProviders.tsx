import React from 'react';
import QueryProviders from './QueryProviders';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryProviders>
        {children}
        <ReactQueryDevtools />
      </QueryProviders>
    </>
  );
};

export default RootProviders;
