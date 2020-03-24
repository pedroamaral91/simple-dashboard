import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const ButtonHamburger = ({ onClick, color }) => (
  <Container color={color} onClick={onClick}>
    &#9776;
  </Container>
);

ButtonHamburger.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonHamburger;
