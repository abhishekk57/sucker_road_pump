import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { type AuthenticateOptions, BiometricAuth, BiometryErrorType, BiometryType, type CheckBiometryResult, getBiometryName, type ResultError } from '@aparajita/capacitor-biometric-auth'
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
  CurrenPageTitle: any = "";
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initStatusBarForAndroid();
    });
  }
  initStatusBarForAndroid() {
    BiometricAuth.checkBiometry().then((value) => {
      console.log(value)
    }).catch((error) => {
      console.log(error)
    })
  }
}
