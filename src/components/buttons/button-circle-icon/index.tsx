import React from 'react';

import Icon from '@components/icons';

import { Container } from './styles';

type ButtonCircleIconProps = {
  color: string;
  iconName: string;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const ButtonCircleIcon: React.FC<ButtonCircleIconProps> = ({
  color,
  iconName,
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <Container
      color={color}
      onClick={onClick}
      className={className}
      type={type}
    >
      <Icon icon={iconName} />
    </Container>
  );
};

export default ButtonCircleIcon;
