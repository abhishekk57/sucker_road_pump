import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertDetailPageRoutingModule } from './alert-detail-routing.module';

import { AlertDetailPage } from './alert-detail.page';
import { SharedModule } from "../SharedModule";

@NgModule({
    declarations: [AlertDetailPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlertDetailPageRoutingModule,
        SharedModule
    ]
})
export class AlertDetailPageModule {}
