import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

const MenuAvatarList = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

MenuAvatarList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default MenuAvatarList;
