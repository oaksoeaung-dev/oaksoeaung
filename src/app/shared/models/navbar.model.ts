import { IconSvgObject } from '@hugeicons/angular';

export interface NavItem {
  icon: IconSvgObject;
  label: string;
  isActive?: boolean;
  subItems?: NavItem[];
  url: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}
