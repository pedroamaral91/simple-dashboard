/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { Dashboard } from '../screens/template';

interface PrivateRoutesProps {
  component: React.ElementType;
  exact?: boolean;
  path: string;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({
  component: Component,
  exact,
  path,
}) => {
  const location = useLocation();

  if (location.pathname === '/') return <Redirect to="/dashboard" />;

  return (
    <Route exact={exact} path={path}>
      <Dashboard>
        <Component />
      </Dashboard>
    </Route>
  );
};

export default PrivateRoutes;
