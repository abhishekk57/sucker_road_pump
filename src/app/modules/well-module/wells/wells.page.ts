import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArrowUp, Mining, WifiOffline, WWifiOffline, WMining, ADown } from '../../../../assets/index'
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-wells',
  templateUrl: './wells.page.html',
  styleUrls: ['./wells.page.scss'],
})
export class WellsPage implements OnInit {
  OnClickSearch() {
    this.isSearch = !this.isSearch;
  }
  ArrowUp: any = ArrowUp;
  ArrowDown: any = ADown;
  WifiOffline: any = WifiOffline;
  Mining: any = Mining;
  WWifiOffline: any = WWifiOffline;
  WMining: any = WMining;
  titleData: any = "Well List";
  data: any = []
  mWellList: any = []
  CurrenPageTitle: string = "Wells";
  datetime = 'assets/svg/datetime.svg';
  isSearch: boolean = false;
  inputValue: string = "";
  constructor(private router: Router, private loadingCtrl: LoadingController) { }


  // data which is coming from child compo.
  getInputValue(event: any) {
    if (event.length > 0) {
      this.mWellList = allWellData.filter((item: any) => item?.well_name.toLowerCase().includes(event));
    } else {
      this.mWellList = allWellData;
    }
  }

// data which is coming from child component sub-header-component.
OnRecieveCalenderData(event: any) {
  let start: any = new Date(event?.data?.start);
  let end: any = event?.data?.end == null ? null : new Date(event?.data?.end);
  if (start.toString() != 'Invalid Date' && end != null) {
    const data = allWellData.filter((item: any) => {
      let date = new Date(item?.time);
      return date >= start && date <= end;
    });
    this.mWellList = data;
  } else if (start.toString() != 'Invalid Date' && end == null) {
    start = start.toDateString();
    const data = allWellData.filter((item: any) => {
      let date = new Date(item?.time).toDateString();
      return date == start;
    });
    this.mWellList = data;
  } else {
    this.mWellList = allWellData;
  }
}
  ngOnInit() {
    this._initWellRecord();
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
        this._initWellRecord();
      })
  }
  navigateTo(item: any) {
    this.router.navigateByUrl('/wells/well-detail', {
      state: item
    });
  }


  private _initWellRecord() {
    this.mWellList = allWellData;
  }
  onIonInfinite(event: any) {
    this._initWellRecord();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  openDetail(i: any) {
    const data = this.mWellList.map((it: any, index: any) => {
      if (i === index) {
        it.isDetail = !it.isDetail;
      } else {
        it.isDetail = false;
      }
      return it;
    });
    this.mWellList = data;
  }
}


const allWellData = [

  {
    "wellId": 1,
    "wellName": "Apache 24 FED 11",
    "dateTime": "2023-04-14 13:14:59",
    "commsStatus": "Comms Established",
    "controllerStatus": "Shutdown",
    "spm": 50.0,
    "pumpFillage": 50.0,
    "inferredProduction": 32.5,
    "effectiveRuntimePercentage": 20,
    "cyclesToday": 23.5,
    "structuralLoadPercentage": 23.5,
    "minMaxloadPercentage": 23.5,
    "gearBoxLoadPercentage": 23.5,
    "rodStressPercentage": 23.5,
    "noOfAlerts": 2,
    "wellStatus": "Optimum Pumping",
    "avgSpm": "5.5 spm",
    "wellState": "Pumping Normal State",
    "pumpCardDiagnistics": "Normal",
    "pumpDisplacement": "278.0 bbls/day",
    "isWellOffline": false,
    "surfaceUnitInformation": "",
    "lastScan": "",
    "gatewayId": "",
    "strokeLengthInInches": 5,
    "tubingHeadPressure": "10psi",
    "casingHeadPressure": "8psi",
    "calculatedPumpIntakePressure": "10psi",
    "currentFluidLoad": 100,
    "downholeCardAreaInSqInch": 25,
    "pumpInfo": {
      "pumpId": "p01",
      "rodDetails": ""
    },
    "pumpDepthInFt": 10,
    "pumpType": "Steel",
    "lastWellTestData": {
      "testGasData": 146,
      "testOil": 46.41,
      "testWater": 82.68,
      "testGross": 109.1,
      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"
    }
  }, {
    "wellId": 2,
    "wellName": "Jones 2-15-022BH",
    "dateTime": "2023-05-14 13:14:59",
    "commsStatus": "Comms Failed 2020-04-14",
    "controllerStatus": "Hand(Manual)",
    "spm": 50.0,
    "pumpFillage": 50.0,
    "inferredProduction": 32.5,
    "effectiveRuntimePercentage": 20,
    "cyclesToday": 23.5,
    "structuralLoadPercentage": 23.5,
    "minMaxloadPercentage": 23.5,
    "gearBoxLoadPercentage": 23.5,
    "rodStressPercentage": 23.5,
    "noOfAlerts": 2,
    "wellStatus": "Optimum Pumping",
    "avgSpm": "5.5 spm",
    "wellState": "Pumping Normal State",
    "pumpCardDiagnistics": "Normal",
    "pumpDisplacement": "278.0 bbls/day",
    "isWellOffline": false,
    "surfaceUnitInformation": "",
    "lastScan": "",
    "gatewayId": "",
    "strokeLengthInInches": 5,
    "tubingHeadPressure": "10psi",
    "casingHeadPressure": "8psi",
    "calculatedPumpIntakePressure": "10psi",
    "currentFluidLoad": 100,
    "downholeCardAreaInSqInch": 25,
    "pumpInfo": {

      "pumpId": "p01",

      "rodDetails": ""

    },

    "pumpDepthInFt": 10,

    "pumpType": "Steel",

    "lastWellTestData": {

      "testGasData": 146,

      "testOil": 46.41,

      "testWater": 82.68,

      "testGross": 109.1,

      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"

    }

  },

  {

    "wellId": 3,

    "wellName": "Apache 24 FED 11",

    "dateTime": "2023-06-14 13:14:59",

    "commsStatus": "Comms Failed 2020-04-14",

    "controllerStatus": "Auto",

    "spm": 50.0,

    "pumpFillage": 50.0,

    "inferredProduction": 32.5,

    "effectiveRuntimePercentage": 20,

    "cyclesToday": 23.5,

    "structuralLoadPercentage": 23.5,

    "minMaxloadPercentage": 23.5,

    "gearBoxLoadPercentage": 23.5,

    "rodStressPercentage": 23.5,

    "noOfAlerts": 4,

    "wellStatus": "Under Pumping",

    "avgSpm": "5.5 spm",

    "wellState": "Pumping Normal State",

    "pumpCardDiagnistics": "Normal",

    "pumpDisplacement": "278.0 bbls/day",

    "isWellOffline": false,

    "surfaceUnitInformation": "",

    "lastScan": "",

    "gatewayId": "",

    "strokeLengthInInches": 5,

    "tubingHeadPressure": "10psi",

    "casingHeadPressure": "8psi",

    "calculatedPumpIntakePressure": "10psi",

    "currentFluidLoad": 100,

    "downholeCardAreaInSqInch": 25,

    "pumpInfo": {

      "pumpId": "p01",

      "rodDetails": ""

    },

    "pumpDepthInFt": 10,

    "pumpType": "Steel",

    "lastWellTestData": {

      "testGasData": 146,

      "testOil": 46.41,

      "testWater": 82.68,

      "testGross": 109.1,

      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"

    }

  },

  {

    "wellId": 4,

    "wellName": "Apache 24 FED 11",

    "dateTime": "2023-07-14 13:14:59",

    "commsStatus": "Comms Failed 2020-04-14",

    "controllerStatus": "Auto",

    "spm": 50.0,

    "pumpFillage": 50.0,

    "inferredProduction": 32.5,

    "effectiveRuntimePercentage": 20,

    "cyclesToday": 23.5,

    "structuralLoadPercentage": 23.5,

    "minMaxloadPercentage": 23.5,

    "gearBoxLoadPercentage": 23.5,

    "rodStressPercentage": 23.5,

    "noOfAlerts": 5,

    "wellStatus": "Optimum Pumping",

    "avgSpm": "5.5 spm",

    "wellState": "Pumping Normal State",

    "pumpCardDiagnistics": "Normal",

    "pumpDisplacement": "278.0 bbls/day",

    "isWellOffline": false,

    "surfaceUnitInformation": "",

    "lastScan": "",

    "gatewayId": "",

    "strokeLengthInInches": 5,

    "tubingHeadPressure": "10psi",

    "casingHeadPressure": "8psi",

    "calculatedPumpIntakePressure": "10psi",

    "currentFluidLoad": 100,

    "downholeCardAreaInSqInch": 25,

    "pumpInfo": {

      "pumpId": "p01",

      "rodDetails": ""

    },

    "pumpDepthInFt": 10,

    "pumpType": "Steel",

    "lastWellTestData": {

      "testGasData": 146,

      "testOil": 46.41,

      "testWater": 82.68,

      "testGross": 109.1,

      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"

    }

  },

  {

    "wellId": 5,

    "wellName": "Apache 24 FED ",

    "dateTime": "2023-08-14 13:14:59",

    "commsStatus": "Comms Failed 2020-04-14",

    "controllerStatus": "Auto",

    "spm": 50.0,

    "pumpFillage": 50.0,

    "inferredProduction": 32.5,

    "effectiveRuntimePercentage": 20,

    "cyclesToday": 23.5,

    "structuralLoadPercentage": 23.5,

    "minMaxloadPercentage": 23.5,

    "gearBoxLoadPercentage": 23.5,

    "rodStressPercentage": 23.5,

    "noOfAlerts": 1,

    "wellStatus": "Over Pumping",

    "avgSpm": "5.5 spm",

    "wellState": "Pumping Normal State",

    "pumpCardDiagnistics": "Normal",

    "pumpDisplacement": "278.0 bbls/day",

    "isWellOffline": false,

    "surfaceUnitInformation": "",

    "lastScan": "",

    "gatewayId": "",

    "strokeLengthInInches": 5,

    "tubingHeadPressure": "10psi",

    "casingHeadPressure": "8psi",

    "calculatedPumpIntakePressure": "10psi",

    "currentFluidLoad": 100,

    "downholeCardAreaInSqInch": 25,

    "pumpInfo": {

      "pumpId": "p01",

      "rodDetails": ""

    },

    "pumpDepthInFt": 10,

    "pumpType": "Steel",

    "lastWellTestData": {

      "testGasData": 146,

      "testOil": 46.41,

      "testWater": 82.68,

      "testGross": 109.1,

      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"

    }

  },

  {

    "wellId": 6,

    "wellName": "Apache 24 FED ",

    "dateTime": "2023-09-14 13:14:59",

    "commsStatus": "Comms Established",

    "controllerStatus": "Hand(Manual)",

    "spm": 50.0,

    "pumpFillage": 50.0,

    "inferredProduction": 32.5,

    "effectiveRuntimePercentage": 20,

    "cyclesToday": 23.5,

    "structuralLoadPercentage": 23.5,

    "minMaxloadPercentage": 23.5,

    "gearBoxLoadPercentage": 23.5,

    "rodStressPercentage": 23.5,

    "noOfAlerts": 3,

    "wellStatus": "Under Pumping",

    "avgSpm": "5.5 spm",

    "wellState": "Pumping Normal State",

    "pumpCardDiagnistics": "Normal",

    "pumpDisplacement": "278.0 bbls/day",

    "isWellOffline": false,

    "surfaceUnitInformation": "",

    "lastScan": "",

    "gatewayId": "",

    "strokeLengthInInches": 5,

    "tubingHeadPressure": "10psi",

    "casingHeadPressure": "8psi",

    "calculatedPumpIntakePressure": "10psi",

    "currentFluidLoad": 100,

    "downholeCardAreaInSqInch": 25,

    "pumpInfo": {

      "pumpId": "p01",

      "rodDetails": ""

    },

    "pumpDepthInFt": 10,

    "pumpType": "Steel",

    "lastWellTestData": {

      "testGasData": 146,

      "testOil": 46.41,

      "testWater": 82.68,

      "testGross": 109.1,

      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"

    }

  },

  {

    "wellId": 7,

    "wellName": "Jones 2-15-022BH",

    "dateTime": "2023-09-14 13:14:59",

    "commsStatus": "Comms Established",

    "controllerStatus": "Hand(Manual)",

    "spm": 50.0,

    "pumpFillage": 50.0,

    "inferredProduction": 32.5,

    "effectiveRuntimePercentage": 20,

    "cyclesToday": 23.5,

    "structuralLoadPercentage": 23.5,

    "minMaxloadPercentage": 23.5,

    "gearBoxLoadPercentage": 23.5,

    "rodStressPercentage": 23.5,

    "noOfAlerts": 8,

    "wellStatus": "Over Pumping",

    "avgSpm": "5.5 spm",

    "wellState": "Pumping Normal State",

    "pumpCardDiagnistics": "Normal",

    "pumpDisplacement": "278.0 bbls/day",

    "isWellOffline": false,

    "surfaceUnitInformation": "",

    "lastScan": "",

    "gatewayId": "",

    "strokeLengthInInches": 5,

    "tubingHeadPressure": "10psi",

    "casingHeadPressure": "8psi",

    "calculatedPumpIntakePressure": "10psi",

    "currentFluidLoad": 100,

    "downholeCardAreaInSqInch": 25,

    "pumpInfo": {

      "pumpId": "p01",

      "rodDetails": ""

    },

    "pumpDepthInFt": 10,

    "pumpType": "Steel",

    "lastWellTestData": {

      "testGasData": 146,

      "testOil": 46.41,

      "testWater": 82.68,

      "testGross": 109.1,

      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"

    }

  },

  {

    "wellId": 8,

    "wellName": "Jones 2-15-022BH",

    "dateTime": "2023-08-14 13:14:59",

    "commsStatus": "Comms Established",

    "controllerStatus": "Hand(Manual)",

    "spm": 50.0,

    "pumpFillage": 50.0,

    "inferredProduction": 32.5,

    "effectiveRuntimePercentage": 20,

    "cyclesToday": 23.5,

    "structuralLoadPercentage": 23.5,

    "minMaxloadPercentage": 23.5,

    "gearBoxLoadPercentage": 23.5,

    "rodStressPercentage": 23.5,

    "noOfAlerts": 2,

    "wellStatus": "Over Pumping",

    "avgSpm": "5.5 spm",

    "wellState": "Pumping Normal State",

    "pumpCardDiagnistics": "Normal",

    "pumpDisplacement": "278.0 bbls/day",

    "isWellOffline": false,

    "surfaceUnitInformation": "",

    "lastScan": "",

    "gatewayId": "",

    "strokeLengthInInches": 5,

    "tubingHeadPressure": "10psi",

    "casingHeadPressure": "8psi",

    "calculatedPumpIntakePressure": "10psi",

    "currentFluidLoad": 100,

    "downholeCardAreaInSqInch": 25,

    "pumpInfo": {

      "pumpId": "p01",

      "rodDetails": ""

    },

    "pumpDepthInFt": 10,

    "pumpType": "Steel",

    "lastWellTestData": {

      "testGasData": 146,

      "testOil": 46.41,

      "testWater": 82.68,

      "testGross": 109.1,

      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"

    }

  },

  {

    "wellId": 9,

    "wellName": "Jones 2-15-022BH",

    "dateTime": "2023-07-14 13:14:59",

    "commsStatus": "Comms Established",

    "controllerStatus": "Shutdown",

    "spm": 50.0,

    "pumpFillage": 50.0,

    "inferredProduction": 32.5,

    "effectiveRuntimePercentage": 20,

    "cyclesToday": 23.5,

    "structuralLoadPercentage": 23.5,

    "minMaxloadPercentage": 23.5,

    "gearBoxLoadPercentage": 23.5,

    "rodStressPercentage": 23.5,

    "noOfAlerts": 1,

    "wellStatus": "Optimum Pumping",

    "avgSpm": "5.5 spm",

    "wellState": "Pumping Normal State",

    "pumpCardDiagnistics": "Normal",

    "pumpDisplacement": "278.0 bbls/day",

    "isWellOffline": false,

    "surfaceUnitInformation": "",

    "lastScan": "",

    "gatewayId": "",

    "strokeLengthInInches": 5,

    "tubingHeadPressure": "10psi",

    "casingHeadPressure": "8psi",

    "calculatedPumpIntakePressure": "10psi",

    "currentFluidLoad": 100,

    "downholeCardAreaInSqInch": 25,

    "pumpInfo": {

      "pumpId": "p01",

      "rodDetails": ""

    },

    "pumpDepthInFt": 10,

    "pumpType": "Steel",

    "lastWellTestData": {

      "testGasData": 146,

      "testOil": 46.41,

      "testWater": 82.68,

      "testGross": 109.1,

      "lastReceivedDtTime": "12/02/2023 12:00:00 AM"

    }

  }

] 