import React from 'react';

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

export default Button;
