import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashBoardPageRoutingModule } from './dash-board-routing.module';

import { DashBoardPage } from './dash-board.page';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from 'src/app/SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule,
    HighchartsChartModule,
    SharedModule
  ],
  declarations: [DashBoardPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashBoardPageModule {}
