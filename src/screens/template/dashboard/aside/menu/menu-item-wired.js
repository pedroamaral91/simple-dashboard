import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MenuItem } from '../../../../../components/menu';

const MenuItemWired = ({ label, icon, route }) => {
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

MenuItemWired.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  route: PropTypes.string,
};

export default MenuItemWired;
