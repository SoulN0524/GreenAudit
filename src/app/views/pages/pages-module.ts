// 這個檔案是用來匯入所有的頁面模組，並且設定共用的服務與元件
import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe, AsyncPipe } from '@angular/common';
import { IconSetService } from '@coreui/icons-angular';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

import { PagesRoutingModule } from './pages-routing.module';
import { DefaultLayoutComponent } from '../../container';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [DefaultLayoutComponent],
  providers: [
    IconSetService,
    provideNativeDateAdapter(),
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
  ],
  imports: [
    JsonPipe,
    AsyncPipe,
    CommonModule,
    PagesRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [DefaultLayoutComponent],
})
export class PagesModule {}
