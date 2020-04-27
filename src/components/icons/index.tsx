import React from 'react';
import PropTypes from 'prop-types';

import {
  FaSkating,
  FaCubes,
  FaUserPlus,
  FaRegFileAlt,
  FaMoneyBillWave,
  FaCog,
  FaLock,
  FaDelicious,
  FaUserAlt,
  FaArrowDown,
  FaTrash,
  FaPlus,
} from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';

interface IconProps {
  icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const icons = new Map([
    ['fa-arrow-down', <FaArrowDown />],
    ['fa-skating', <FaSkating />],
    ['FaCubes', <FaCubes />],
    ['MdPeople', <MdPeople />],
    ['FaUserPlus', <FaUserPlus />],
    ['FaUserAlt', <FaUserAlt />],
    ['FaRegFileAlt', <FaRegFileAlt />],
    ['FaMoneyBillWave', <FaMoneyBillWave />],
    ['FaCog', <FaCog />],
    ['FaLock', <FaLock />],
    ['FaDelicious', <FaDelicious />],
    ['FaTrash', <FaTrash />],
    ['FaPlus', <FaPlus />],
  ]);

  return <>{icons.has(icon) ? icons.get(icon) : null}</>;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
