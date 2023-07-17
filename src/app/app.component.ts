import { Component } from '@angular/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages = [{
      title: 'Home',
      url: '/home',
      icon: 'log-in'
    },
    {
      title: 'wells',
      url: '/wells',
      icon: 'person'
    },
    {
      title: 'alerts',
      url: '/alerts',
      icon: 'information-circle'
    }];
    CurrenPageTitle:any="";
  constructor(public statusBar: StatusBar, private platform: Platform,private splashScreen:SplashScreen) { 
     this.initializeApp();
   }

   initializeApp() {
    this.platform.ready().then(() => {
      this.initStatusBarForAndroid();
    });
  }
  initStatusBarForAndroid() {
    if (this.platform.is("android") && !this.platform.is("mobileweb")) {
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleBlackTranslucent();
    }
  }
}
