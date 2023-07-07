import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertsPageRoutingModule } from './alerts-routing.module';

import { AlertsPage } from './alerts.page';
import { SharedModule } from "../../SharedModule";

@NgModule({
    declarations: [AlertsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlertsPageRoutingModule,
        SharedModule
    ]
})
export class AlertsPageModule {}
