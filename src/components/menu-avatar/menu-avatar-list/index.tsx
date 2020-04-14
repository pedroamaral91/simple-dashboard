import React from 'react';

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

export default MenuAvatarList;
