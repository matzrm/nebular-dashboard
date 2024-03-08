import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    link: '/auth',
  },
  {
    title: 'Not found',
    icon: 'close-circle-outline',
    link: '/pages/whatever',
  }
];
