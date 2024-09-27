import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: '',
    component: AppComponent,
    data: { title: 'ESG量化功能' },
    children: [
      {
        path: 'homepage',
        component: HomePageComponent,
        data: { title: '首頁' },
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
