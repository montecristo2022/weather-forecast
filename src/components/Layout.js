import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}

export const Layout = () => {

  return (
    <div >
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

    </div>
  );
};
