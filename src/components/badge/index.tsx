import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

interface BadgeProps {
  color?: string;
  backgroundColor: string;
  content: string;
  size?: number;
}

const Badge: React.FC<BadgeProps> = ({ color = '#ffff', backgroundColor, content, size = 0.7 }) => (
  <Container color={color} backgroundColor={backgroundColor} size={size}>
    {content}
  </Container>
);

Badge.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Badge;
