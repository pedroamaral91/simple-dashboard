import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { MenuList } from '../../../../../components/menu';
import Icon from '../../../../../components/icons';

import MenuItemWired from './menu-item-wired';

const MenuListWired = ({ title, icon, list }) => {
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

MenuListWired.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default MenuListWired;
