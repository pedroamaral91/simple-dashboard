import React from 'react';

import { Divisor } from '../components';

import { Container, Anchor } from './styles';

const ForgotPasswordContainer = () => (
  <Container>
    <Divisor />
    <Anchor to="/forgotpassword">Esqueceu a senha?</Anchor>
  </Container>
);

export default ForgotPasswordContainer;
