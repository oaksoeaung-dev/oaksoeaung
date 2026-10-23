import { Service, signal } from '@angular/core';
import { NavGroup } from '../../shared/models/navbar.model';
import { ConstellationIcon, Directions02Icon, Note02Icon } from '@hugeicons/core-free-icons';

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
    {
      label: 'Design Patterns',
      items: [
        {
          label: 'Command',
          icon: ConstellationIcon,
          url: 'design-patterns/command',
        },
      ],
    },
  ]);

  public readonly navGroups = this.#navGroups.asReadonly();
}
