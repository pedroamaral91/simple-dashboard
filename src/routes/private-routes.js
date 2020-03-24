/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { Dashboard } from '../screens/template';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const location = useLocation();

  if (location.pathname === '/') return <Redirect to="/dashboard" />;

  return (
    <Route {...rest}>
      <Dashboard>
        <Component />
      </Dashboard>
    </Route>
  );
};

PrivateRoutes.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoutes;
