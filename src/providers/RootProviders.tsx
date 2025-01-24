import React from 'react';
import { MSWProvider } from '@/components/MSWComponent';
// import server from '@/mocks/http';
import QueryProviders from './QueryProviders';

// if (process.env.NEXT_RUNTIME === 'nodejs') {
//   server.listen();
// }

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryProviders>
        <MSWProvider>{children}</MSWProvider>
      </QueryProviders>
    </>
  );
};

export default RootProviders;
