import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RightArrow } from 'src/assets';
@Component({
  selector: 'app-well-detail',
  templateUrl: './well-detail.page.html',
  styleUrls: ['./well-detail.page.scss'],
})
export class WellDetailPage implements OnInit, OnDestroy {
  titleData: any = "";
  CurrenPageTitle: any = "Wells Detail";
  isChild: boolean = true;
  RightIcon: any = RightArrow;
  selectedItem: string = 'Well info';
  isOpen: boolean = false;
  _OnSelectItem(selectedItem: string = '') {
    this.isOpen = !this.isOpen;
    this.selectedItem = selectedItem == '' ? '' : selectedItem;
  }
  constructor(private elementRef: ElementRef, private router: Router) { }
  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
  _OnOpenModalClick(){
    this.isOpen = !this.isOpen;
  }
  ngOnInit() {
    try {
      if (this.router.getCurrentNavigation() != null) {
        const data: any = this.router.getCurrentNavigation()?.extras?.state;
        console.log(data)
        this.titleData = data['well_name'];
      }
    } catch (error) { }
  }
  selectItem(event: any) {
    this.selectedItem = event?.detail?.value;
  }
}

