import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { setConfig } from 'react-hot-loader';

import './config/reactotron';
import 'react-toastify/dist/ReactToastify.css';

import CreateGlobalStyle from './styles/global';
import { store, persistor } from './store';
import theme from './styles/theme';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TemplateProvider } from './screens/template/dashboard/context';

setConfig({
  reloadHooks: false,
});

const AppSetup: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ToastContainer />
      <TemplateProvider>
        <CreateGlobalStyle />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </TemplateProvider>
    </PersistGate>
  </Provider>
);

export default hot(AppSetup);
