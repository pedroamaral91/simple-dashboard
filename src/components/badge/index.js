import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Badge = ({ color = '#ffff', backgroundColor, content, size = 0.7 }) => (
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
