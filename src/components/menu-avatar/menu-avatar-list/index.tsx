import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

interface MenuAvatarListProps {
  title: string;
  children: React.ReactNode;
}

const MenuAvatarList: React.FC<MenuAvatarListProps> = ({ title, children }) => (
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
