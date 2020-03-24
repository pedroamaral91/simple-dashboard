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
} from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';

const Icon = ({ icon }) => {
  const icons = new Map([
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
  ]);

  return <>{icons.has(icon) ? icons.get(icon) : null}</>;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
