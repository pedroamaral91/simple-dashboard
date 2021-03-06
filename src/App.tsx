import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import './config/reactotron';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';

import Routes from './routes';
import ModalGate from './screens/template/modal';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
      <ModalGate />
    </BrowserRouter>
  );
}

export default App;
