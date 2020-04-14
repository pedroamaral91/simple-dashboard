import React, { useState, useCallback } from 'react';
import { FaAngleUp } from 'react-icons/fa';

import {
  Container,
  Content,
  RightContainer,
  IconContainer,
  Text,
  List,
} from './styles';

interface MenuListProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const MenuList: React.FC<MenuListProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(currState => !currState);
  }, []);

  return (
    <Container>
      <Content onClick={handleClick}>
        <RightContainer>
          {icon}
          <Text>{title}</Text>
        </RightContainer>
        <IconContainer isOpen={isOpen}>
          <FaAngleUp />
        </IconContainer>
      </Content>
      <List isOpen={isOpen}>{children}</List>
    </Container>
  );
};

export default MenuList;
