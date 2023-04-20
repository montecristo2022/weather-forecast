import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from './UserMenu/UserMenu';

// style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}

export const Layout = (props) => {
 
    const { isLoggedIn } = useAuth();
  return (
    <div >
       {/* {isLoggedIn ? <UserMenu setRenderData={props.setRenderData}/> :  null} */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
