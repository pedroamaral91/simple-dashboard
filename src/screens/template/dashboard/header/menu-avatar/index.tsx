import React, { useMemo, useRef } from 'react';

import { Container } from './styles';

import {
  MenuAvatarList,
  MenuAvatarItem,
} from '../../../../../components/menu-avatar';
import Badge from '../../../../../components/badge';

interface MenuAvatarProps {
  isOpen: boolean;
}

const MenuAvatar: React.FC<MenuAvatarProps> = ({ isOpen }) => {
  const wrapperRef = useRef(null);
  const badgePerfil = useMemo(
    () => <Badge backgroundColor="#CC0000" content="4" />,
    [],
  );
  return (
    <Container isOpen={isOpen} ref={wrapperRef}>
      <MenuAvatarList title="Conta">
        <MenuAvatarItem badge={badgePerfil} icon="MdPeople" label="Perfil" />
        <MenuAvatarItem icon="FaCog" label="Configurações" />
        <MenuAvatarItem icon="FaLock" label="Sair" />
      </MenuAvatarList>
    </Container>
  );
};

export default MenuAvatar;
