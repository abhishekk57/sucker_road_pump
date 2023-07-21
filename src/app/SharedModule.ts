import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonHeaderComponent } from './common-components/common-header/common-header.component';
import { MenuComponent } from './menu/menu.component';
import { SubHeaderComponent } from './common-components/sub-header/sub-header.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { AlrtFilterComponent } from './common-components/alrt-filter/alrt-filter.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
    imports: [CommonModule, IonicModule.forRoot(), HttpClientModule, HighchartsChartModule,
        FormsModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,
        MatNativeDateModule, MatSortModule, MatTableModule,
        MatPaginatorModule, MatSelectModule, MatFormFieldModule,MatMenuModule],
    declarations: [MenuComponent, CommonHeaderComponent, SubHeaderComponent, AlrtFilterComponent],
    exports: [MenuComponent, FormsModule, CommonHeaderComponent,
        SubHeaderComponent, AlrtFilterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }