import React from 'react';

import { Container, Loader } from './styles';

interface ButtonLoaderProps {
  isLoading: boolean;
  label: string;
  type?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  isLoading,
  label,
  type = 'button',
  onClick,
}) => (
  <Container type={type} isLoading={isLoading} onClick={onClick}>
    {isLoading ? <Loader /> : label}
  </Container>
);

export default ButtonLoader;
