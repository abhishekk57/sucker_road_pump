import { Component, Input, OnInit } from '@angular/core';
import { ArrowDown, Delfi, Help } from '../../../assets/index';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {
  @Input() public title: string = "";
  ArrowDownIcon: any = ArrowDown;
  DelfiIcon: any = Delfi;
  HelpIcon: any = Help;
  constructor() { }

  ngOnInit() { }

  _OnOpenMenuClick = () => {
    
  }

}
