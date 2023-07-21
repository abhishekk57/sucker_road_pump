import { Component, EventEmitter, Input, Output, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import { ModalController } from '@ionic/angular';
import { MatMenu } from '@angular/material/menu';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-alrt-filter',
  templateUrl: './alrt-filter.component.html',
  styleUrls: ['./alrt-filter.component.scss']
})
export class AlrtFilterComponent {
  @Input() selectedRangeValue: DateRange<Date> | undefined;
  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();
  @Input() matMenu: MatMenu | undefined;
  selectedChange(m: any) {
    if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
      this.selectedRangeValue = new DateRange<Date>(m, null);
    } else {
      const start = this.selectedRangeValue.start;
      const end = m;
      if (end < start) {
        this.selectedRangeValue = new DateRange<Date>(end, start);
      } else {
        this.selectedRangeValue = new DateRange<Date>(start, end);
      }
    }
    this.selectedRangeValueChange.emit(this.selectedRangeValue);
    console.log(this.selectedRangeValue)
  }


  /////////////////////////////////////////////////////////////////////////////////////////

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  ///////////////////////////////////////////////
  toppings = this._formBuilder.group({
    EffectiveRunTime: false,
    CyclesToday: false,
    StructuralLoad: false,
    MinMaxLoad: false,
    GearboxLoad: false,
    RodStress: false
  });
  constructor(private _formBuilder: FormBuilder, private modalCntrl: ModalController) { }
  applyClick() {
    this.modalCntrl.dismiss()
  }
  cancelClick() {
    this.modalCntrl.dismiss()
  }
}

// export class AlrtFilterComponent implements AfterViewInit{
//   ngAfterViewInit(): void {
//     const element = (document.getElementsByClassName('mdc-icon-button')[0] as HTMLElement)
//     element.click();
//     console.log('element:- ', element);
//     element.addEventListener('click', (ev: any) => {
//       console.log('I have clicked the element');
//     })
//   }

// }
