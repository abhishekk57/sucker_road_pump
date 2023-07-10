import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellDetailPageRoutingModule } from './well-detail-routing.module';

import { WellDetailPage } from './well-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellDetailPageRoutingModule
  ],
  declarations: [WellDetailPage]
})
export class WellDetailPageModule {}
