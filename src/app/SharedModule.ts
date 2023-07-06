import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CommonHeaderComponent } from './common-components/common-header/common-header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [CommonModule,IonicModule.forRoot()],
    declarations: [MenuComponent,CommonHeaderComponent],
    exports: [MenuComponent, CommonModule, FormsModule,BrowserModule,CommonHeaderComponent]
})
export class SharedModule { }