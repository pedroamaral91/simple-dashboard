import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../store/state';

import LogoContainer from './logo-container';
import Form from './form';
import ForgotPasswordContainer from './forgot-password-container';
import { Container, Content, YellowBackground } from './styles';

const { getIsSigned } = authSelectors;

const Login = () => {
  const isSigned = useSelector(getIsSigned);

  return isSigned ? (
    <Redirect to="/dashboard" />
  ) : (
    <Container>
      <Content>
        <LogoContainer />
        <Form />
        <ForgotPasswordContainer />
      </Content>
      <YellowBackground />
    </Container>
  );
};
export default Login;
