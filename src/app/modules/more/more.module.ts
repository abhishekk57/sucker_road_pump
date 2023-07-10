import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorePageRoutingModule } from './more-routing.module';

import { MorePage } from './more.page';
import { SharedModule } from "../../SharedModule";

@NgModule({
    declarations: [MorePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MorePageRoutingModule,
        SharedModule
    ]
})
export class MorePageModule {}
