import React from 'react';

import { Container } from './styles';

interface MenuWrapperProps {
  children: React.ReactNode;
}

const MenuWrapper: React.FC<MenuWrapperProps> = ({ children }) => <Container>{children}</Container>;

export default MenuWrapper;
