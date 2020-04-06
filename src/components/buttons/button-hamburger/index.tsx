import React from 'react';

import { Container } from './styles';

interface ButtonHamburger {
  onClick(e: React.MouseEvent): void;
  color?: string;
}

const ButtonHamburger: React.FC<ButtonHamburger> = ({ onClick, color }) => (
  <Container color={color} onClick={onClick}>
    &#9776;
  </Container>
);

export default ButtonHamburger;
