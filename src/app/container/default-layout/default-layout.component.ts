import { Component, HostListener } from '@angular/core';
import { navItems } from './Nav.server';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  public navItems:any[] = navItems;

  isServiceOpen = false;
  isSidebarCollapsed = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  ngOnInit() {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSidebarCollapsed = window.innerWidth < 1000;
  }

  toggleService() {
    this.isServiceOpen = !this.isServiceOpen;
    console.log(this.isServiceOpen);
  }
  
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
