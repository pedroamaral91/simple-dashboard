/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const NoLayout = ({ component: Component, ...rest }) => (
  <Route {...rest}>
    <Component />
  </Route>
);

NoLayout.propTypes = {
  component: PropTypes.any.isRequired,
};

export default NoLayout;
