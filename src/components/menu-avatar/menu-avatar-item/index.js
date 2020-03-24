import React from 'react';
import PropTypes from 'prop-types';

import { Container, RightContainer, Text } from './styles';

import Icon from '../../icons';

const MenuAvatarItem = ({ icon, label, badge }) => (
  <Container>
    <RightContainer>
      <Icon icon={icon} />
      <Text>{label}</Text>
    </RightContainer>
    {badge}
  </Container>
);

MenuAvatarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  badge: PropTypes.element,
};

export default MenuAvatarItem;
