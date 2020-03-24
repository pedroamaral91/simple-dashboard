import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const MenuWrapper = ({ children }) => <Container>{children}</Container>;

MenuWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MenuWrapper;
