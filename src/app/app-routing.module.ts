// 這個檔案是用來設定路由的，這邊我們設定了首頁的路由，以及引入了其他頁面的路由設定，最後再導向首頁。
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/pages/home-page/home-page.component';
import { DefaultLayoutComponent } from './container';
import { CorporateEsgDashBoardComponent } from './views/pages/serviceContent/corporate-esg-dash-board/corporate-esg-dash-board.component';
import { IndustryEsgDashBoardComponent } from './views/pages/serviceContent/industry-esg-dash-board/industry-esg-dash-board.component';
import { SustainableGPTComponent } from './views/pages/serviceContent/sustainable-gpt/sustainable-gpt.component';
import { NewsPageComponent } from './views/pages/news-page/news-page.component';
import { TechniquesComponent } from './views/pages/techniques/techniques.component';
import { ContactUsComponent } from './views/pages/contact-us/contact-us.component';


export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { title: 'ESG量化功能' },
    children: [
      {
        path: 'homepage',
        component: HomePageComponent,
        data: { title: '首頁' },
      },
      {
        path: 'services',
        children: [
          {
            path: 'companyDashboard',
            component: CorporateEsgDashBoardComponent,
          },
          {
            path: 'industryDashboard',
            component: IndustryEsgDashBoardComponent,
          },
          {
            path: 'sustainableGPT',
            component: SustainableGPTComponent,
          },
        ],
      },
      {
        path: 'news',
        component: NewsPageComponent,
      },
      {
        path: 'techniques',
        component: TechniquesComponent,
      },
      {
        path: 'contactUs',
        component: ContactUsComponent,
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages-module').then((m: any) => m.PagesModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
