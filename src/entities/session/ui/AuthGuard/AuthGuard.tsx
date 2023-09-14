import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';

import { getSessionData } from '../../model/selectors/getSessionData/getSessionData';

export const AuthGuard = () => {
  const { isAuthorized } = useSelector(getSessionData);

  if (!isAuthorized) return <Navigate to={APP_ROUTES.auth.login} replace={true} />;

  return <Outlet />;
};
