import React from 'react';
import { Map } from 'immutable';

import { useTheme } from '@hooks';

import { Container } from './styles';

interface ButtonProps {
  label: string;
  type?: string;
  onClick(e: React.MouseEvent): void;
  className?: string;
  bgColor?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  bgColor = 'primary',
  className = '',
}) => {
  const theme = useTheme();
  const BackgroundColorMap = Map({
    primary: theme.semantic.primary,
    danger: theme.semantic.danger,
    success: theme.semantic.success,
    info: theme.semantic.info,
    warning: theme.semantic.warning,
  });
  const backgroundColor = bgColor && BackgroundColorMap.get(bgColor, false);

  return (
    <Container
      bgColor={backgroundColor}
      className={className}
      onClick={onClick}
      type={type}
    >
      {label}
    </Container>
  );
};

export default Button;
