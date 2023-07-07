import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('myTabs') tabs!: IonTabs;
  activeTabName: any = 'home';
  constructor() { }

  ngOnInit() { }
  getSelectedTab(event:any): void {
    this.activeTabName = event;
  }
}
