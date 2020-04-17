import React, { useMemo } from 'react';

import { MenuList } from '@components/menu';
import Icon from '@components/icons';

import MenuItemWired from './menu-item-wired';

interface List {
  label: string;
  icon: string;
  route: string;
}

interface MenuListWiredProps {
  title: string;
  icon: string;
  list: List[];
}

const MenuListWired: React.FC<MenuListWiredProps> = ({ title, icon, list }) => {
  const renderedList = useMemo(
    () =>
      list.map(item => (
        <MenuItemWired
          key={item.route}
          label={item.label}
          icon={<Icon icon={item.icon} />}
          route={item.route}
        />
      )),
    [list],
  );

  return (
    <MenuList title={title} icon={<Icon icon={icon} />}>
      {renderedList}
    </MenuList>
  );
};

export default MenuListWired;
