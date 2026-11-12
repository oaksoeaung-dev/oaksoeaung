import { Service, signal } from '@angular/core';
import { NavGroup } from '../../shared/models/navbar.model';
import { Directions02Icon, GroupLayersIcon, Mouse14Icon, Note02Icon } from '@hugeicons/core-free-icons';

@Service()
export class MenuStore {
  #navGroups = signal<NavGroup[]>([
    {
      label: 'Components Deep Dive',
      items: [
        {
          label: 'Directives',
          icon: Directions02Icon,
          url: 'component-deep-dive/directives',
        },
        {
          label: 'Practices',
          icon: GroupLayersIcon,
          subItems: [
            {
              label: 'Mouse Tracker',
              icon: Mouse14Icon,
              url: 'component-deep-dive/practices/mouse-tracker',
            },
          ],
        },
      ],
    },
    {
      label: 'Custom Components',
      items: [
        {
          label: 'Tiptap',
          icon: Note02Icon,
          url: 'custom-components/tiptap',
        },
      ],
    },
  ]);

  public readonly navGroups = this.#navGroups.asReadonly();
}
