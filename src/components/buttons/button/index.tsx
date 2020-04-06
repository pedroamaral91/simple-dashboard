import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

interface ButtonProps {
  label: string;
  type?: string;
  onClick(e: React.MouseEvent): void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => (
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
