import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import {
  MenuAvatarList,
  MenuAvatarItem,
} from '../../../../../components/menu-avatar';
import Badge from '../../../../../components/badge';

const MenuAvatar = ({ isOpen }) => {
  const wrapperRef = useRef(null);
  const badgePerfil = useMemo(
    () => <Badge backgroundColor="#f86c6b" content="4" width={20} />,
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

MenuAvatar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuAvatar;
