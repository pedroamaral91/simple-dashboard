import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container, IconContainer, Link } from './styles';

import useOutsideClick from '../../../hooks/useOutsideClick';

const MenuItem = ({ icon, route, label, handleClick, isActive }) => {
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
      <Link to={route}>{label}</Link>
    </Container>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MenuItem;
