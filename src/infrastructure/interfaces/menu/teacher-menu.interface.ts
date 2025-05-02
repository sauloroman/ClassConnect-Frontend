import { MenuItemInterface } from "../../../domain/interfaces/menu.interface";

export const teacherMenu: MenuItemInterface[] = [
  {
    icon: 'home-alt-2',
    name: 'Clases',
    route: 'classrooms'
  },
  {
    icon: 'file-blank',
    name: 'Recursos',
    route: 'resources'
  },
  {
    icon: 'group',
    name: 'Estudiantes',
    route: 'students'
  },
  {
    icon: 'stats',
    name: 'Estadísticas',
    route: 'stats'
  },
]