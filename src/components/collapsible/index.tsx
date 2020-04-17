import React, { useState, useCallback } from 'react';

import Icon from '@components/icons';

import {
  Container,
  HeaderContainer,
  Title,
  IconContainer,
  Content,
} from './styles';

type Collapsible = {
  title?: string;
  maxHeight?: string;
};

const Collapsible: React.FC<Collapsible> = ({
  title = 'Endereço 01',
  maxHeight = '300px',
  children,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpened(currState => !currState);
  }, [setIsOpened]);
  return (
    <Container>
      <HeaderContainer onClick={handleClick}>
        <Title>{title}</Title>
        <IconContainer isOpened={isOpened}>
          <Icon icon="FaAngleDown" />
        </IconContainer>
      </HeaderContainer>
      <Content isOpened={isOpened} maxHeight={maxHeight}>
        {children}
      </Content>
    </Container>
  );
};

export default Collapsible;
