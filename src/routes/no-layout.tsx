/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';

interface NoLaoyutProps {
  component: React.ElementType;
  exact?: boolean;
  path: string;
}

const NoLayout: React.FC<NoLaoyutProps> = ({
  component: Component,
  exact,
  path,
}) => (
  <Route exact={exact} path={path}>
    <Component />
  </Route>
);

export default NoLayout;
