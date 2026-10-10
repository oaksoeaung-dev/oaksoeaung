import { Component, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { LabelModule } from 'primeng/label';
import { FormsModule } from '@angular/forms';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { NgTemplateOutlet } from '@angular/common';
import { NavItem } from '../../../models/navbar.model';
import { ChevronDownIcon, SidebarLeftIcon } from '@hugeicons/core-free-icons';
import { MenuStore } from '../../../../core/stores/menu.store';
import { RouterLink } from '@angular/router';

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
    RouterLink,
  ],
  selector: 'app-main-shell',
  templateUrl: './main-shell.html',
})
export class MainShell {
  protected menuStore = inject(MenuStore);

  protected readonly SidebarLeftIcon = SidebarLeftIcon;
  protected readonly ChevronDownIcon = ChevronDownIcon;

  hasActiveSub(item: NavItem): boolean {
    return !!item.subItems?.some((s) => s.isActive);
  }

  hasActiveChild(item: NavItem): boolean {
    if (item.isActive) return true;
    return item.subItems?.some((c) => this.hasActiveChild(c)) ?? false;
  }
}
