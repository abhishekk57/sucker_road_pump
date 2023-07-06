import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent  implements OnInit {
  @Input() public title: string = "";
  constructor() { }

  ngOnInit() {}

  
}
