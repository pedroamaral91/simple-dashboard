import React, { useContext } from 'react';

import { Container, MenuAside, Opacity } from './styles';

import { TemplateContext } from '../context';
import Menu from './menu';

const Aside = () => {
  const { state } = useContext(TemplateContext);

  return (
    <Container isOpen={state.showAside}>
      <MenuAside>
        <Menu />
      </MenuAside>
      <Opacity isOpen={state.showAside} />
    </Container>
  );
};

export default Aside;
