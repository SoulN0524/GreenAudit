//此頁面是用來設定路由的，但是這個頁面是空的，因為我們不需要在這裡設定路由，我們會在各自的模組中設定路由。
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}