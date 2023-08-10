import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-wells',
  templateUrl: './wells.page.html',
  styleUrls: ['./wells.page.scss'],
})
export class WellsPage implements OnInit {
  OnClickSearch() {
    this.isSearch = true;
  }
  titleData: any = "Well List";
  data: any = []
  mWellList: any = []
  CurrenPageTitle: string = "Wells";
  datetime = 'assets/svg/datetime.svg';
  isSearch: boolean = false;
  inputValue: string = "";
  constructor(private router: Router, private loadingCtrl: LoadingController) { }
  getInputValue(event: any) {
    if (event.length > 0) {
      this.mWellList = this.data.filter((item: any) => item?.well_name.toLowerCase().includes(event.toLowerCase()));
    } else {
      this.mWellList = this.data;
    }
  }
  ngOnInit() {
    this.generateItems();
    // this.showLoading();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      cssClass: 'custom-loading'
    });

    loading.present();
    loading.onDidDismiss()
      .then(() => {
        this.generateItems();
      })
  }
  navigateTo(item: any) {
    this.router.navigateByUrl('/wells/well-detail', {
      state: item
    });
  }

  private generateItems() {
    for (let i = 0; i < 5; i++) {
      let obj = {
        well_name: "Well" + i + 1,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Over Pumping',
        time: "2023:04:12 07:33:56 AM"
      }
      let obj1 = {
        well_name: "Well" + i + 2,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Optimum Pumping',
        time: "2023:04:12 07:33:56 AM"
      }
      let obj2 = {
        well_name: "Well" + i + 3,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Under Pumping',
        time: "2023:04:12 07:33:56 AM"
      }
      this.data.push(obj);
      this.data.push(obj1);
      this.data.push(obj2);
      if (this.data.length > 0) {
        this.mWellList = this.data;
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
