/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useRef } from 'react';

import { Container, IconContainer, Link } from './styles';

import useOutsideClick from '../../../hooks/useOutsideClick';

interface MenuItemProps {
  icon: React.ReactNode;
  route: string;
  label: string;
  isActive: boolean;
  handleClick(e: React.MouseEvent): void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  handleClick,
  isActive,
}) => {
  const wrapperRef = useRef(null);
  const [lastClicked, setLastClicked] = useState(false);
  const onClick = useCallback(
    event => {
      handleClick(event);
      setLastClicked(currState => !currState);
    },
    [handleClick],
  );

  const handleLastClicked = useCallback(() => {
    setLastClicked(false);
  }, []);
  useOutsideClick(wrapperRef, handleLastClicked);

  return (
    <Container
      onClick={onClick}
      lastClick={lastClicked}
      isActive={isActive}
      ref={wrapperRef}
    >
      <IconContainer>{icon}</IconContainer>
      <Link>{label}</Link>
    </Container>
  );
};

export default MenuItem;
