import { Component } from '@angular/core';
import { navItems } from './Nav.server';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  public navItems:any[] = navItems;
}
