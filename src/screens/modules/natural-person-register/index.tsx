import React from 'react';

import Divisor from '../../login/components/divisor/index';

import { Container, Content, Title } from './styles';
import FormNaturalPerson from './form-natural-person/index';

const NaturalPersonRegister: React.FC = () => (
  <Container>
    <Content>
      <Title>Cadastro de Pessoa Física</Title>
      <Divisor width={50} />
      <FormNaturalPerson />
    </Content>
  </Container>
);

export default NaturalPersonRegister;
