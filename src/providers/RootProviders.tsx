import React from 'react';
import { MSWProvider } from '@/components/MSWComponent';
// import server from '@/mocks/http';
import QueryProviders from './QueryProviders';
import ToastProvider from './ToastProvider';

// if (process.env.NEXT_RUNTIME === 'nodejs') {
//   server.listen();
// }

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryProviders>
        <MSWProvider>
          <ToastProvider />
          {children}
        </MSWProvider>
      </QueryProviders>
    </>
  );
};

export default RootProviders;
