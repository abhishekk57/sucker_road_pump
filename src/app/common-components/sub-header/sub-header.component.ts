import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlrtFilterComponent } from '../alrt-filter/alrt-filter.component';
import { Router } from '@angular/router';
import { leftArrow,Filter,Search } from '../../../assets/index';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  @Input() public textTitle: string = "";
  @Input() public isChild: boolean = false;
  leftArrow = leftArrow;
  FilterIcon = Filter;
  SearchIcon = Search;
  constructor(private modalContrl: ModalController, private router: Router) { }

  ngOnInit() { }
  goBack() {
    if (this.textTitle == "Alert Detail") {
      this.router.navigate(['alerts']);
    } else if (this.textTitle == "Well Name 001") {
      this.router.navigate(['wells']);
    }
  }
  async presentModal() {
    const modal = await this.modalContrl.create({
      component: AlrtFilterComponent,
    });
    await modal.present();
  }
}
