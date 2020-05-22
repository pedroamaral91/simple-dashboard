import React from 'react';

import Home from '../screens/home';
import Login from '../screens/login';
import Retorno from '../screens/retorno';

import PrivateRoutes from './private-routes';
import NoLayout from './no-layout';

const Routes = () => (
  <>
    <NoLayout exact path="/login" component={Login} />
    <PrivateRoutes path="/dashboard" component={Home} />
    <PrivateRoutes path="/modulos/retorno" component={Retorno} />
  </>
);

export default Routes;
