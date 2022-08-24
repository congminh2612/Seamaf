import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Loading from '../loading/Loading';
function RequireAuth({ children }: { children: JSX.Element }) {
  const value = useContext(AuthContext);
  if (!value.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default RequireAuth;
