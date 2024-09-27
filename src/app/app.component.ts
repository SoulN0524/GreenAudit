import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true, // 添加這一行，使元件成為獨立元件
  imports: [RouterOutlet], // 將 RouterOutlet 加入 imports，因為這是獨立元件
})
export class AppComponent {
  title = 'ESGInfo';
}
