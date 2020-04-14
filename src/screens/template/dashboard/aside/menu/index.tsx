import React, { useMemo } from 'react';

import navItems from '../../../../../nav';
import Icon from '../../../../../components/icons';
import { MenuWrapper } from '../../../../../components/menu';

import MenuItemWired from './menu-item-wired';
import MenuListWired from './menu-list-wired';

const Menu: React.FC = () => {
  const renderedMenu = useMemo(
    () =>
      navItems.items.map(item =>
        item.children ? (
          <MenuListWired
            key={item.title}
            title={item.title}
            icon={item.icon}
            list={item.children}
          />
        ) : (
          <MenuItemWired
            key={item.route}
            label={item.label}
            icon={<Icon icon={item.icon} />}
            route={item.route}
          />
        ),
      ),
    [],
  );
  return <MenuWrapper>{renderedMenu}</MenuWrapper>;
};

export default Menu;
