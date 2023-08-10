import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {  CalendarComponent } from '../calendar-filter/calendar-filter.component';
import { Router } from '@angular/router';
import { leftArrow, Filter, Search, Comment } from '../../../assets/index';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  @Input() public textTitle: string = "";
  @Input() public isChild: boolean = false;
  @Input() public isSearch: boolean | undefined;
  leftArrow = leftArrow;
  FilterIcon = Filter;
  SearchIcon = Search;
  CommentIcon = Comment;
  Search: string = "Search";
  @Output() valueChange = new EventEmitter();
  constructor(private modalContrl: ModalController, private router: Router) { }
  handleInput(event: any) {
    this.valueChange.emit(event.target.value.toLowerCase());
  }

  ngOnInit() {
  }
  _OnBackIconClick() {
    if (this.textTitle == "Alert Detail") {
      this.router.navigate(['alerts']);
    } else if (this.textTitle.includes("Well")) {
      this.router.navigate(['wells']);
    } else if (this.textTitle == "Event detail") {
      this.router.navigate(['events']);
    }
  }
  async _OnFilterIconClick() {
    const modal = await this.modalContrl.create({
      component: CalendarComponent,
    });
    await modal.present();
    modal.onDidDismiss()
    .then((value:any)=>{
      console.log(value);
    })
  }
  onBackBtnClick() {
    this.isSearch = !this.isSearch;
    this.valueChange.emit("");
  }
  _OnSearchIconClick() {
    this.isSearch = true;
  }
  _OnCommentIconClick(){
    console.log('_____ on comment icon click _____')
  }
}
