import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BackgroundColorOptions, StatusBar } from '@capacitor/status-bar';
import { type AuthenticateOptions, BiometricAuth, BiometryErrorType, BiometryType, type CheckBiometryResult, getBiometryName, type ResultError } from '@aparajita/capacitor-biometric-auth'
import { Setting, Slbicon } from 'src/assets';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  Slbicon: any = Slbicon;
  SettingIcon: any = Setting;
  pages: any = [{
    title: 'Dashboard',
    url: '/home',
    isSelected: true
  },
  {
    title: 'Well List',
    url: '/wells',
    isSelected: false
  },
  {
    title: 'Alerts',
    url: '/alerts',
    isSelected: false
  },
  {
    title: 'Events',
    url: '/alerts',
    isSelected: false
  },
  {
    title: 'Reports',
    url: '/alerts',
    isSelected: false
  },
  {
    title: 'Custom Admin',
    url: '/alerts',
    isSelected: false
  },
  {
    title: 'SLB Admin',
    url: '/alerts',
    isSelected: false
  }];
  CurrenPageTitle: any = "";
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  _OnSelected(position: number) {
    const data = this.pages.map((it: any, index: any) => {
      if (position === index) {
        it.isSelected = !it.isSelected;
      } else {
        it.isSelected = false;
      }
      return it;
    });
    this.pages = data;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova") && !this.platform.is("mobileweb")) {
        this.hideSplashScreen();
      }
      // this.askFingerPrintOption();
    });
  }
  async hideSplashScreen() {
    // await SplashScreen.hide();
    let option: BackgroundColorOptions = {
      color: "#0c0c6d"
    }
    await StatusBar.setBackgroundColor(option);
  }
  // askFingerPrintOption() {
  //   if (this.service.isDevice()) {
  //     BiometricAuth.checkBiometry().then((value) => {
  //       console.log(value);
  //       let options: AuthenticateOptions = {
  //         androidTitle: "pelase Sign in"
  //       };
  //       BiometricAuth.authenticate(options)
  //         .then((res: any) => {
  //           console.log(res)
  //         })
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //       // if (value.isAvailable) {
  //       //   if (value.biometryType > 0) {

  //       //   }
  //       // } else {
  //       //   console.log("FingerPrint not available")
  //       // }
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  //   } else {
  //     console.log("App is running on web")
  //   }
  // }
}
