import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-detail',
  templateUrl: './well-detail.page.html',
  styleUrls: ['./well-detail.page.scss'],
})
export class WellDetailPage implements OnInit,OnDestroy {
  titleData: any = "Well Name 001";
  CurrenPageTitle: any = "Wells Detail";
  isChild: boolean = true;
  constructor(private elementRef: ElementRef) { }
  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

  ngOnInit() {
  }
}
