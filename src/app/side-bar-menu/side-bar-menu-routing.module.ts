import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideBarMenuPage } from './side-bar-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SideBarMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideBarMenuPageRoutingModule {}
