import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telementry-control',
  templateUrl: './telementry-control.component.html',
  styleUrls: ['./telementry-control.component.scss'],
})
export class TelementryControlComponent implements OnInit {

  items: any = []
  constructor() { }

  ngOnInit() {
    this.items = data;
  }

}

const data = [
  {
    message: "Chord_SRP_Kelter7-1H2_WillistonNDUSA_402",
    status: "Communication Lost",
    code: 1
  },
  {
    message: "Chord_SRP_Kelter7-1H2_WillistonNDUSA_402",
    status: "Ready To Provision",
    code: 2
  },
  {
    message: "Chord_SRP_Kelter7-1H2_WillistonNDUSA_402",
    status: "Operational",
    code: 3
  },
  {
    message: "Chord_SRP_Kelter7-1H2_WillistonNDUSA_402",
    status: "Ready To Provision",
    code: 2
  },
  {
    message: "Chord_SRP_Kelter7-1H2_WillistonNDUSA_402",
    status: "Communication Lost",
    code: 1
  },
  {
    message: "Chord_SRP_Kelter7-1H2_WillistonNDUSA_402",
    status: "Communication Lost",
    code: 1
  }
]