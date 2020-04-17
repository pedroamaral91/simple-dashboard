/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '@store';
import { Dashboard } from '../screens/template';
// import { RolesTypes } from '../nav';

interface PrivateRoutesProps {
  component: React.ElementType;
  exact?: boolean;
  path: string;
  // roles: RolesTypes[];
}

const { getIsSigned } = authSelectors;
// const { getLoggedUserRole } = userSelectors;

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({
  component: Component,
  exact,
  path,
  // roles,
}) => {
  const location = useLocation();
  const isSigned = useSelector(getIsSigned);
  // const userRole = useSelector(getLoggedUserRole);

  if (location.pathname === '/') return <Redirect to="/dashboard" />;
  // if (!isSigned) return <Redirect to="/login" />;
  // if (!roles.find((role) => role === userRole)) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <Route exact={exact} path={path}>
      <Dashboard>
        <Suspense fallback={<div>loading.</div>}>
          <Component />
        </Suspense>
      </Dashboard>
    </Route>
  );
};

export default PrivateRoutes;
