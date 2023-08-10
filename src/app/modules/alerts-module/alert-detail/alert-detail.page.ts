import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-detail',
  templateUrl: './alert-detail.page.html',
  styleUrls: ['./alert-detail.page.scss'],
})
export class AlertDetailPage implements OnInit {
  titleData: any = "Alert Detail";
  CurrenPageTitle: any = "Alert Detail";
  isChild: boolean = true;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateTo(item: any) {
    this.router.navigateByUrl('alert-detail',{
      state:item
    });
  }
}
