import { MenuGroup } from '../models/menu-group.model';
import { LucideForm, LucideScanText } from '@lucide/angular';

export const MENU_GROUPS: MenuGroup[] = [
  /*  {
    label: 'Learn',
    items: [
      {
        label: 'Routing',
        icon: LucideRoute,
        routerLink: 'learn/routing',
      },
    ],
  },*/
  {
    label: 'Tests',
    items: [
      {
        label: 'Formly',
        icon: LucideForm,
        children: [
          {
            label: 'Render Form',
            icon: LucideScanText,
            routerLink: 'tests/formly/render-form',
          },
        ],
      },
    ],
  },
];
