import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './SharedModule';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./dash-board/dash-board.module').then((m) => m.DashBoardPageModule),
      },
      {
        path: 'wells',
        loadChildren: () => import('./wells/wells.module').then((m) => m.WellsPageModule),
      },
      {
        path: 'alerts',
        loadChildren: () => import('./alerts/alerts.module').then((m) => m.AlertsPageModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./events/events.module').then((m) => m.EventsPageModule),
      },
      {
        path: 'more',
        loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
      },
    ],
  }
]

@NgModule({
  imports: [
    SharedModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  exports: [IonicModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }