import React from 'react';

import { Container } from './styles';

interface BadgeProps {
  color?: string;
  backgroundColor: string;
  content: string;
  size?: number;
}

const Badge: React.FC<BadgeProps> = ({
  color = '#ffff',
  backgroundColor,
  content,
  size = 0.7,
}) => (
  <Container color={color} backgroundColor={backgroundColor} size={size}>
    {content}
  </Container>
);

export default Badge;
