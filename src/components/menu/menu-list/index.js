import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaAngleUp } from 'react-icons/fa';

import {
  Container,
  Content,
  RightContainer,
  IconContainer,
  Text,
  List,
} from './styles';

const MenuList = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(currState => !currState);
  }, []);

  return (
    <Container isOpen={isOpen}>
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

MenuList.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.any.isRequired,
};

export default MenuList;
