import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ label, onClick, type = 'button' }) => (
  <Container onClick={onClick} type={type}>
    {label}
  </Container>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
