import React from 'react';
import QueryProviders from './QueryProviders';
import { MSWProvider } from '@/components/MSWComponent';
import server from '@/mocks/http';

if (process.env.NEXT_RUNTIME === 'nodejs') {
  server.listen();
}
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MSWProvider>
        <QueryProviders>
        {children}
        <ReactQueryDevtools />
      </QueryProviders>
      </MSWProvider>
    </>
  );
};

export default RootProviders;
