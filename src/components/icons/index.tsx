import React from 'react';

import {
  FaAngleUp,
  FaAngleDown,
  FaCog,
  FaCubes,
  FaDelicious,
  FaLock,
  FaMinus,
  FaMoneyBillWave,
  FaRegFileAlt,
  FaSkating,
  FaUserPlus,
  FaUserAlt,
  FaArrowDown,
  FaTrash,
  FaPlus,
  FaFileImport,
  FaTimesCircle,
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
    ['FaAngleUp', <FaAngleUp />],
    ['FaAngleDown', <FaAngleDown />],
    ['FaCog', <FaCog />],
    ['FaCubes', <FaCubes />],
    ['FaDelicious', <FaDelicious />],
    ['FaTrash', <FaTrash />],
    ['FaPlus', <FaPlus />],
    ['FaFileImport', <FaFileImport />],
    ['FaTimesCircle', <FaTimesCircle />],
    ['FaLock', <FaLock />],
    ['FaMinus', <FaMinus />],
    ['FaMoneyBillWave', <FaMoneyBillWave />],
    ['FaPlus', <FaPlus />],
    ['FaRegFileAlt', <FaRegFileAlt />],
    ['FaUserAlt', <FaUserAlt />],
    ['FaUserPlus', <FaUserPlus />],
    ['MdPeople', <MdPeople />],
    ['fa-skating', <FaSkating />],
  ]);

  return <>{icons.has(icon) ? icons.get(icon) : null}</>;
};

export default Icon;
