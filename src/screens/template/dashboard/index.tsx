import React, { useContext } from 'react';

import Header from './header';
import Aside from './aside';
import { TemplateContext } from './context';
import { Container, Content, Wrapper } from './styles';

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state } = useContext(TemplateContext);

  return (
    <Container>
      <Header />
      <Content>
        <Aside />
        <Wrapper isOpen={state.showAside}>{children}</Wrapper>
      </Content>
    </Container>
  );
};

export default React.memo(Dashboard);
