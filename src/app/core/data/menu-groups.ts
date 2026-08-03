import { MenuGroup } from '../models/menu-group.model';
import { LucideRoute } from '@lucide/angular';

export const MENU_GROUPS: MenuGroup[] = [
  {
    label: 'Learn',
    items: [
      {
        label: 'Routing',
        icon: LucideRoute,
        routerLink: 'learn/routing',
      },
    ],
  },
];
