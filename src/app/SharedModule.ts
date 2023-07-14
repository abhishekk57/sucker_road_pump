import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonHeaderComponent } from './common-components/common-header/common-header.component';
import { MenuComponent } from './menu/menu.component';
import { SubHeaderComponent } from './common-components/sub-header/sub-header.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
    imports: [CommonModule,IonicModule.forRoot(),HttpClientModule,HighchartsChartModule,
        FormsModule,ReactiveFormsModule],
    declarations: [MenuComponent,CommonHeaderComponent,SubHeaderComponent],
    exports: [MenuComponent, FormsModule,CommonHeaderComponent,
        SubHeaderComponent]
})
export class SharedModule { }