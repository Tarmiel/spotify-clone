import { lazy, Suspense } from 'react';

import { PageLoader } from '@/widgets/PageLoader';

const LoginPage = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./LoginPage')), 1000);
    }),
);

export const LoginPageAsync = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <LoginPage />
    </Suspense>
  );
};
