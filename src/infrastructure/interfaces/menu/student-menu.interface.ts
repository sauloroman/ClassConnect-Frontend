import { MenuItemInterface } from "../../../domain/interfaces/menu.interface";

export const studentMenu: MenuItemInterface[] = [
  {
    icon: 'home-alt-2',
    name: 'Inicio',
    route: 'home'
  },
  {
    icon: 'calendar-alt',
    name: 'Calendar',
    route: 'calendar'
  },
  {
    icon: 'group',
    name: 'Profesores',
    route: 'students'
  },
  {
    icon: 'stats',
    name: 'Estadísticas',
    route: 'stats'
  },
]