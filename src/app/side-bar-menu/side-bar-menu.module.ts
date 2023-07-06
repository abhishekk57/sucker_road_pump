import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideBarMenuPageRoutingModule } from './side-bar-menu-routing.module';

import { SideBarMenuPage } from './side-bar-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideBarMenuPageRoutingModule
  ],
  declarations: [SideBarMenuPage]
})
export class SideBarMenuPageModule {}
