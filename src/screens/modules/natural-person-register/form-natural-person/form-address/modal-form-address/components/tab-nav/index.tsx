import React, { useCallback } from 'react';
import { NavItem } from 'reactstrap';
import classnames from 'classnames';

import { ButtonCircleIcon } from '@components/buttons';
import { useTheme } from '@hooks';

import { Title, NavLink } from './styles';

type TabNavProps = {
  onClick: (index: number) => void;
  index: number;
  activeTab: number;
  handleAppend(): void;
  handleRemove(index: number): void;
};

const TabNav: React.FC<TabNavProps> = ({
  activeTab,
  index,
  onClick,
  handleAppend,
  handleRemove,
}) => {
  const theme = useTheme();

  const handleActiveTab = useCallback(() => {
    onClick(index);
  }, [onClick, index]);

  const onRemove = useCallback(() => {
    handleRemove(index);
  }, []);

  return (
    <NavItem>
      <NavLink
        className={classnames({ active: activeTab === index })}
        onClick={handleActiveTab}
      >
        <Title>
          Endereço
          {index + 1}
        </Title>
        <ButtonCircleIcon
          iconName="FaPlus"
          color={theme.semantic.primary}
          onClick={handleAppend}
        />
        <ButtonCircleIcon
          iconName="FaMinus"
          color={theme.semantic.danger}
          onClick={onRemove}
        />
      </NavLink>
    </NavItem>
  );
};

export default TabNav;
