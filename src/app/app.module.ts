// 這個頁面是 Angular 的主要模組，它會匯入所有的 Angular 模組和元件，並且設定應用程式的基本設定。
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  JsonPipe,
  AsyncPipe,
  DecimalPipe,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient, provideHttpClient } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LayoutModule } from '@angular/cdk/layout';
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
import { DefaultLayoutComponent } from './container';
import { HomePageComponent } from './views/pages/home-page/home-page.component';
import { CorporateEsgDashBoardComponent } from './views/pages/serviceContent/corporate-esg-dash-board/corporate-esg-dash-board.component';
import { IndustryEsgDashBoardComponent } from './views/pages/serviceContent/industry-esg-dash-board/industry-esg-dash-board.component';
import { SustainableGPTComponent } from './views/pages/serviceContent/sustainable-gpt/sustainable-gpt.component';
import { NewsPageComponent } from './views/pages/news-page/news-page.component';
import { TechniquesComponent } from './views/pages/techniques/techniques.component';
import { ContactUsComponent } from './views/pages/contact-us/contact-us.component';
import { ButtonModule, CardModule } from '@coreui/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const APP_CONTAINERS = [];

@NgModule({
  declarations: [
    // ...APP_CONTAINERS
    HomePageComponent,
    NewsPageComponent,
    TechniquesComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    JsonPipe,
    AsyncPipe,
    DecimalPipe,
    BrowserModule,
    CardModule,
    MatButtonModule,
    FormsModule,
    ButtonModule,
    MatCardModule,
    LayoutModule,
    RouterModule,
    AppRoutingModule,
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
    Title,
    IconSetService,
    provideNativeDateAdapter(),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  // bootstrap: [AppComponent],
})
export class AppModule {}