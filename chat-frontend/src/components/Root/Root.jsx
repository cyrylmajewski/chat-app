import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const Root = () => {
  const location = useLocation();

  return (
    <div className='App'>
      <Outlet />
    </div>
  );
};
