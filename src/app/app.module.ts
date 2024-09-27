import { NgModule } from '@angular/core';
import {
  JsonPipe,
  AsyncPipe,
  DecimalPipe,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';
// Removed duplicate import
import { AppComponent } from './app.component';
import { IconSetService } from '@coreui/icons-angular';

import {
  DateAdapter,
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const APP_CONTAINERS = [];

@NgModule({
  declarations: [
    // ...APP_CONTAINERS
  ],
  imports: [
    JsonPipe,
    AsyncPipe,
    DecimalPipe,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgScrollbarModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClient,
      multi: true,
    },
    Title,
    IconSetService,
    provideNativeDateAdapter(),
    provideAnimationsAsync(),
  ],
  bootstrap: [],
})
export class AppModule {}