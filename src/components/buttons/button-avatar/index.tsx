import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { Container, UserImage } from './styles';

interface ButtonAvatarProps {
  onClick(e: React.MouseEvent): void;
  imageURI?: string;
}

const ButtonAvatar: React.FC<ButtonAvatarProps> = ({ onClick, imageURI }) => (
  <Container onClick={onClick}>
    {imageURI ? <UserImage src={imageURI} /> : <FaUserCircle size={40} />}
  </Container>
);

export default ButtonAvatar;
