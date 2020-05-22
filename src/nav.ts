interface Item {
  label: string;
  icon: string;
  route: string;
  children?: undefined;
}

interface Title {
  title: string;
  icon: string;
  children: Item[];
}

interface Nav {
  items: (Item | Title)[];
}

const dashboard: Item = {
  label: 'Dashboard',
  icon: 'FaDelicious',
  route: '/',
};

const modulos: Title = {
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
    {
      icon: 'FaFileImport',
      route: '/modulos/retorno',
      label: 'Retorno',
    },
  ],
};

const relatorios: Title = {
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

const nav: Nav = {
  items: [dashboard, modulos, relatorios],
};

export default nav;
