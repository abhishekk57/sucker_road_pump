import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
import { IonTabs, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('myTabs') tabs!: IonTabs;
  activeTabName: any = 'home';
  constructor(private faio: FingerprintAIO,private platform:Platform) { }

  ngOnInit() { 
   
    this.platform.ready()
    .then(()=>{
      // this.showFingerprintAuthDlg();
    })
  }
  getSelectedTab(event:any): void {
    this.activeTabName = event;
  }

  public showFingerprintAuthDlg() {
    this.faio.isAvailable().then((result: any) => {
      console.log(result)
      this.faio.show({
        cancelButtonTitle: 'Cancel',
        description: "Some biometric description",
        disableBackup: true,
        title: 'Scanner Title',
        fallbackButtonTitle: 'FB Back Button',
        subtitle: 'This SubTitle'
      })
        .then((result: any) => {
          console.log(result)
          alert("Successfully Authenticated!")
        })
        .catch((error: any) => {
          console.log(error)
          alert("Match not found!")
        });

    })
      .catch((error: any) => {
        console.log(error)
      });
  }
}
