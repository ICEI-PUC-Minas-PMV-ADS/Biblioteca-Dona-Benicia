import React, { useEffect } from 'react';
import { Route, useNavigate, Outlet } from 'react-router-dom';
import { isTokenExpired } from './jwt';

interface PrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = !isTokenExpired();
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      if (!isAuthenticated) {
        navigate('/login');
      } else {
        navigate('/Home');
      }
    };

    checkToken();
  }, []); // Executa apenas uma vez ao carregar a página

  if (!isAuthenticated) {
    return null; // Renderizar nada enquanto redireciona para a página de login
  }

  return (
    <Route
      {...rest}
      element={<Component><Outlet /></Component>}
    />
  );
};

export default PrivateRoute;
