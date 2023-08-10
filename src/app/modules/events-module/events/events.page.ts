import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  titleData: any = "Events";
  data: any = []
  CurrenPageTitle: string = "Events";
  mEvents:any=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.generateItems();
  }
  navigateTo(item: any) {
    this.router.navigateByUrl('/events/event-detail',{
      state:item
    });
  }
  getColorStatus(index: any) {
    if (index === 0) {
      return "#eb445a"
    } else if (index === 1) {
      return "#135d54"
    } else if (index === 2) {
      return "#e0a41c"
    } else {
      return "#eb445a"
    }
  }
  getInputValue(event: any) {
    if (event.length > 0) {
      this.mEvents = this.data.filter((item: any) => item?.well_name.toLowerCase().includes(event.toLowerCase()));
    } else {
      this.mEvents = this.data;
    }
  }
  private generateItems() {
    for (let i = 0; i < 15; i++) {
      let obj = {
        well_name: "Well0"+i+1,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Over Pumping',
        time: "2023:04:12 07:33:56 AM"
      }
      let obj1 = {
        well_name: "Well0"+i+2,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Optimum Pumping',
        time: "2023:04:12 07:33:56 AM"
      }
      let obj2 = {
        well_name: "Well0"+i+3,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Under Pumping',
        time: "2023:04:12 07:33:56 AM"
      }
      this.data.push(obj);
      this.data.push(obj1);
      this.data.push(obj2);
      if (this.data.length > 0) {
        this.mEvents = this.data;
      }
    }
  }
  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
