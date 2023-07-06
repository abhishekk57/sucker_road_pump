import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellsPage } from './wells.page';

const routes: Routes = [
  {
    path: '',
    component: WellsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellsPageRoutingModule {}
