import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { NgTemplateOutlet } from '@angular/common';
import { LucideChevronDown, LucideDynamicIcon, LucidePanelLeft } from '@lucide/angular';
import { Menu, MenuGroup } from '@core/models/menu-group.model';
import { MENU_GROUPS } from '@core/data/menu-groups';

@Component({
  selector: 'app-shell',
  imports: [AvatarModule, SidebarModule, ButtonModule, Sidebar, NgTemplateOutlet, LucidePanelLeft, LucideChevronDown, LucideDynamicIcon],
  templateUrl: './shell.html',
})
export class Shell implements OnInit, OnDestroy {
  isMobile = signal(false);
  open = signal(true);
  private mql?: MediaQueryList;
  private mqlListener?: (e: MediaQueryListEvent) => void;

  menus: MenuGroup[] = MENU_GROUPS;

  ngOnInit() {
    if (typeof window === 'undefined') return;
    this.mql = window.matchMedia('(max-width: 1023px)');
    this.isMobile.set(this.mql.matches);
    this.open.set(!this.mql.matches);
    this.mqlListener = (e) => {
      this.isMobile.set(e.matches);
      this.open.set(!e.matches);
    };
    this.mql.addEventListener('change', this.mqlListener);
  }

  ngOnDestroy() {
    this.mql?.removeEventListener('change', this.mqlListener!);
  }
  hasActiveChild(item: Menu): boolean {
    if (item.isActive) return true;
    return item.children?.some((c) => this.hasActiveChild(c)) ?? false;
  }
}
