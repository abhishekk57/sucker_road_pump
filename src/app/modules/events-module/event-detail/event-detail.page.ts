import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  isChild:boolean = true;
  titleData:string="Event detail";
  CurrenPageTitle:string="";

 
  constructor() {}

  ngOnInit() {
  }
}
