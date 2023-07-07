import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonHeaderComponent } from './common-components/common-header/common-header.component';
import { MenuComponent } from './menu/menu.component';
import { SubHeaderComponent } from './common-components/sub-header/sub-header.component';

@NgModule({
    imports: [CommonModule,IonicModule.forRoot()],
    declarations: [MenuComponent,CommonHeaderComponent,SubHeaderComponent],
    exports: [MenuComponent, FormsModule,CommonHeaderComponent,
        SubHeaderComponent]
})
export class SharedModule { }