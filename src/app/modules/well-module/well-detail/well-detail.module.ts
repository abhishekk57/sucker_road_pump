import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellDetailPageRoutingModule } from './well-detail-routing.module';

import { WellDetailPage } from './well-detail.page';
import { SharedModule } from "../../../shared-modules";
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
    declarations: [WellDetailPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WellDetailPageRoutingModule,
        SharedModule,
        HighchartsChartModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WellDetailPageModule {}
