import { LucideIcon } from '@lucide/angular';

export interface Menu {
  label: string;
  icon?: LucideIcon;
  isActive?: boolean;
  children?: Menu[];
}

export interface MenuGroup {
  label: string;
  items: Menu[];
}
