import { Component } from '@angular/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  CurrenPageTitle: any = "Dashboard";
  constructor(public statusBar: StatusBar,private platform:Platform) {
    if(this.platform.is("android") && !this.platform.is("mobileweb")){
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleBlackTranslucent();
    }
  }
}
