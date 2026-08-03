import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideDynamicIcon, LucideIconInput, LucideInfo, LucideLibrary, LucideLogIn } from '@lucide/angular';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-routing-page',
  imports: [MenubarModule, RouterOutlet, Ripple, RouterLink, RouterLinkActive, LucideDynamicIcon],
  templateUrl: './routing-page.html',
})
export class RoutingPage {
  items: (MenuItem & { lucideIcon?: LucideIconInput })[] = [
    {
      label: 'Courses',
      lucideIcon: LucideLibrary,
      routerLink: 'courses',
    },
    {
      label: 'About',
      lucideIcon: LucideInfo,
      routerLink: 'about',
    },
    {
      label: 'login',
      lucideIcon: LucideLogIn,
      routerLink: 'login',
    },
  ];
}
