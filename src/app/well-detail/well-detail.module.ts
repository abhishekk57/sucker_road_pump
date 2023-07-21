import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellDetailPageRoutingModule } from './well-detail-routing.module';

import { WellDetailPage } from './well-detail.page';
import { SharedModule } from "../SharedModule";

@NgModule({
    declarations: [WellDetailPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WellDetailPageRoutingModule,
        SharedModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WellDetailPageModule {}
