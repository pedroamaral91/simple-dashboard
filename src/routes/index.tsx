import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoutes from './private-routes';
import NoLayout from './no-layout';
import Retorno from '../screens/retorno';

const Login = lazy(() => import('../screens/login'));

const Home = lazy(() => import('../screens/home'));

// modules
const NaturalPersonRegister = lazy(() =>
  import('../screens/modules/natural-person-register/index'),
);

const Routes = () => (
  <>
    <NoLayout exact path="/login" component={Login} />
    <PrivateRoutes path="/dashboard" component={Home} />
    <PrivateRoutes path="/modulos/retorno" component={Retorno} />
    <Switch>
      <NoLayout exact path="/login" component={Login} />
      <PrivateRoutes exact path="/" component={Home} />
      <PrivateRoutes exact path="/dashboard" component={Home} />
      <PrivateRoutes
        exact
        path="/modulos/pessoafisica"
        component={NaturalPersonRegister}
      />
    </Switch>
  </>
);

export default Routes;
