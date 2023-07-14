import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DashBoardPageRoutingModule } from './dash-board-routing.module';
import { DashBoardPage } from './dash-board.page';
import { SharedModule } from 'src/app/SharedModule';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  imports: [
    SharedModule,
    DashBoardPageRoutingModule,
    HighchartsChartModule
  ],
  declarations: [DashBoardPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashBoardPageModule {}
