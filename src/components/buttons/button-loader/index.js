import React from 'react';
import PropTypes from 'prop-types';

import { Container, Loader } from './styles';

const ButtonLoader = ({ isLoading, label, type = 'button', onClick }) => (
  <Container type={type} isLoading={isLoading} onClick={onClick}>
    {isLoading ? <Loader /> : label}
  </Container>
);

ButtonLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default ButtonLoader;
