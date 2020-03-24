import React from 'react';
import PropTypes from 'prop-types';

import { FaUserCircle } from 'react-icons/fa';
import { Container, UserImage } from './styles';

const ButtonAvatar = ({ onClick, imageURI }) => (
  <Container onClick={onClick}>
    {imageURI ? <UserImage src={imageURI} /> : <FaUserCircle size={40} />}
  </Container>
);

ButtonAvatar.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageURI: PropTypes.string,
};

export default ButtonAvatar;
