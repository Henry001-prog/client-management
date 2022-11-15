import React, { Suspense } from 'react';
import AppRoutes from './Routes';
import { RecoilRoot } from 'recoil';

const ClientsApp = () => (
  <RecoilRoot>
    <Suspense fallback="Loading...">
      <AppRoutes />
    </Suspense>
  </RecoilRoot>
);

export default ClientsApp;
