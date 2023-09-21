import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { IonTabs, Platform } from '@ionic/angular';
import { Calendar, Warning, Well, Dashboard, More } from '../../assets/index';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('myTabs') tabs!: IonTabs;
  activeTabName: any = 'home';
  CalendarIcon: any = Calendar;
  WarningIcon: any = Warning;
  WellIcon: any = Well;
  DashboardIcon: any = Dashboard;
  MoreIcon: any = More;
  isOpenPopOver:boolean = false;
  constructor() { }

  ngOnInit() {  }
  getSelectedTab(event: any): void {
    this.activeTabName = event;
    // event == 'more' ? this.isOpenPopOver = true : false;
  }

  public showFingerprintAuthDlg() {
    // this.faio.isAvailable().then((result: any) => {
    //   console.log(result)
    //   this.faio.show({
    //     cancelButtonTitle: 'Cancel',
    //     description: "Some biometric description",
    //     disableBackup: true,
    //     title: 'Scanner Title',
    //     fallbackButtonTitle: 'FB Back Button',
    //     subtitle: 'This SubTitle'
    //   })
    //     .then((result: any) => {
    //       console.log(result)
    //       alert("Successfully Authenticated!")
    //     })
    //     .catch((error: any) => {
    //       console.log(error)
    //       alert("Match not found!")
    //     });

    // })
    //   .catch((error: any) => {
    //     console.log(error)
    //   });
  }
}
