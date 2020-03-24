const dashboard = {
  label: 'Dashboard',
  icon: 'FaDelicious',
  route: '/',
};

const modulos = {
  title: 'Módulos',
  icon: 'FaCubes',
  children: [
    {
      icon: 'MdPeople',
      route: '/modulos/pessoa-fisica',
      label: 'Pessoa Física',
    },
    {
      icon: 'FaUserPlus',
      route: '/modulos/colaboradores',
      label: 'Colaboradores',
    },
  ],
};

const relatorios = {
  title: 'Relatórios',
  icon: 'FaRegFileAlt',
  children: [
    {
      icon: 'FaMoneyBillWave',
      route: '/relatorios/pessoa-fisica',
      label: 'CDC',
    },
  ],
};

export default {
  items: [dashboard, modulos, relatorios],
};
