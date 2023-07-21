import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './SharedModule';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
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
      loadChildren: () => import('./modules/dash-board/dash-board.module').then((m) => m.DashBoardPageModule),
    },
    {
      path: 'wells',
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/wells/wells.module').then((m) => m.WellsPageModule),
        },
        {
          path: 'well-detail',
          loadChildren: () => import('./well-detail/well-detail.module').then(m => m.WellDetailPageModule),
        }
      ]
    },
    {
      path: 'alerts',
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/alerts/alerts.module').then((m) => m.AlertsPageModule),
        },
        {
          path: 'alert-detail',
          loadChildren: () => import('./alert-detail/alert-detail.module').then(m => m.AlertDetailPageModule)
        }
      ]

    },
    {
      path: 'events',
      children: [
        {
          path: "",
          loadChildren: () => import('./modules/events/events.module').then((m) => m.EventsPageModule),
        },
        {
          path: 'event-detail',
          loadChildren: () => import('./event-detail/event-detail.module').then(m => m.EventDetailPageModule)
        }
      ]
    },
    {
      path: 'more',
      children:[
        {
          path:'',
          loadChildren: () => import('./modules/more/more.module').then(m => m.MorePageModule)
        }
      ]
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