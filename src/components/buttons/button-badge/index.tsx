import React from 'react';

import { Container, Badge, Button } from './styles';

interface IButtonBadgeProps {
  label: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick(e: React.MouseEvent): void;
  className?: string;
  badgeContent: string | number;
}

const ButtonBadge: React.FC<IButtonBadgeProps> = ({
  label,
  onClick,
  type = 'button',
  className = '',
  badgeContent,
}) => (
  <Container className={className}>
    <Button onClick={onClick} type={type}>
      {label}
      <Badge>{badgeContent}</Badge>
    </Button>
  </Container>
);

export default ButtonBadge;
