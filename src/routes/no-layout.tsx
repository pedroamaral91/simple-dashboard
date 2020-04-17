/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
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
    <Suspense fallback={<div>loading..</div>}>
      <Component />
    </Suspense>
  </Route>
);

export default NoLayout;
