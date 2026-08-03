import { LucideIcon } from '@lucide/angular';

export interface Menu {
  label: string;
  icon?: LucideIcon;
  isActive?: boolean;
  children?: Menu[];
  routerLink?: string;
}

export interface MenuGroup {
  label: string;
  items: Menu[];
}
