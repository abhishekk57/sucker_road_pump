import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellsPageRoutingModule } from './wells-routing.module';

import { WellsPage } from './wells.page';
import { SharedModule } from 'src/app/SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellsPageRoutingModule,
    SharedModule
  ],
  declarations: [WellsPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WellsPageModule {}
