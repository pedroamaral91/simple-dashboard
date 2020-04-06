import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Aside from './aside';
import { Container, Content } from './styles';


const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container>
    <Header />
    <Content>
      <Aside />
      {children}
    </Content>
  </Container>
);

Dashboard.propTypes = {
  children: PropTypes.any.isRequired,
};

export default React.memo(Dashboard);
