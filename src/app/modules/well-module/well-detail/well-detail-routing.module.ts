import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellDetailPage } from './well-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WellDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellDetailPageRoutingModule {}
