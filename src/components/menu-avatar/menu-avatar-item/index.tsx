import React from 'react';

import { Container, RightContainer, Text } from './styles';

import Icon from '../../icons';

interface MenuAvatarItem {
  icon: string;
  label: string;
  badge?: React.ReactNode
}

const MenuAvatarItem: React.FC<MenuAvatarItem> = ({ icon, label, badge }) => (
  <Container>
    <RightContainer>
      <Icon icon={icon} />
      <Text>{label}</Text>
    </RightContainer>
    {badge}
  </Container>
);

export default MenuAvatarItem;
