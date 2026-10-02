import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { LabelModule } from 'primeng/label';
import { FormsModule } from '@angular/forms';
import { HugeiconsIconComponent, IconSvgObject } from '@hugeicons/angular';
import { ChevronDownIcon, Home, Search, SidebarLeftIcon } from '@hugeicons/core-free-icons';
import { NgTemplateOutlet } from '@angular/common';

interface NavItem {
  icon: IconSvgObject;
  label: string;
  isActive?: boolean;
  subItems?: NavItem[];
}
interface NavGroup {
  label: string;
  items: NavItem[];
}

@Component({
  imports: [
    AvatarModule,
    SelectModule,
    SelectButtonModule,
    ToggleSwitchModule,
    SidebarModule,
    ButtonModule,
    LabelModule,
    FormsModule,
    Sidebar,
    HugeiconsIconComponent,
    NgTemplateOutlet,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  navGroups: NavGroup[] = [
    {
      label: 'Navigation',
      items: [
        { icon: Home, label: 'Home' },
        {
          icon: Search,
          label: 'Search',
          subItems: [
            {
              label: 'Test',
              icon: Home,
              subItems: [
                {
                  label: 'Test',
                  icon: Home,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  hasActiveSub(item: NavItem): boolean {
    return !!item.subItems?.some((s) => s.isActive);
  }

  hasActiveChild(item: NavItem): boolean {
    if (item.isActive) return true;
    return item.subItems?.some((c) => this.hasActiveChild(c)) ?? false;
  }

  protected readonly SidebarLeftIcon = SidebarLeftIcon;
  protected readonly ChevronDownIcon = ChevronDownIcon;
}
