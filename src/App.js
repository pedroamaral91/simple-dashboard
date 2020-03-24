import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import './config/reactotron';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
