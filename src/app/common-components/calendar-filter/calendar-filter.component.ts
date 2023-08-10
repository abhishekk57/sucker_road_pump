import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { ModalController } from '@ionic/angular';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-calendar-filter',
  templateUrl: './calendar-filter.component.html',
  styleUrls: ['./calendar-filter.component.scss']
})
export class CalendarComponent {
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
  }

  constructor(private modalCntrl: ModalController) { }
  _OnapplyClick(selectedRangeValue: any) {
    this.modalCntrl.dismiss(selectedRangeValue)
  }
  _OnResetClick() {
    this.selectedRangeValue = undefined;
  }
  _OnCancelClick() {
    this.modalCntrl.dismiss({});
  }
  _OnDayBtnClick(){}
  _OnWeekBtnClick(){}
  _OnMonthBtnClick(){}
}