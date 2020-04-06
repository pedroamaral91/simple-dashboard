import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { MenuItem } from '../../../../../components/menu';

interface MenuItemWiredProps {
  label: string;
  icon: React.ReactNode;
  route: string;
}

const MenuItemWired: React.FC<MenuItemWiredProps> = ({ label, icon, route }) => {
  const history = useHistory();
  const location = useLocation();
  const isActive = route === location.pathname;
  const handleClick = useCallback(() => {
    history.push(route);
  }, [history, route]);

  return (
    <MenuItem
      label={label}
      icon={icon}
      isActive={isActive}
      handleClick={handleClick}
      route={route}
    />
  );
};

export default MenuItemWired;
