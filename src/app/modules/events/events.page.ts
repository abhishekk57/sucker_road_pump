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
  constructor(private router:Router) { }

  ngOnInit() {
    this.generateItems();
  }
  navigateTo(item: any) {
    this.router.navigateByUrl('event-detail',{
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

  private generateItems() {
    for (let i = 0; i < 15; i++) {
      let obj = {
        well_name: "Well Name 001",
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Status1',
        time: "2023:04:12 07:33:56 AM"
      }
      this.data.push(obj);
    }
  }
  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
