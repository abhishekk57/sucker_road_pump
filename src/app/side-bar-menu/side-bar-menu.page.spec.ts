import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideBarMenuPage } from './side-bar-menu.page';

describe('SideBarMenuPage', () => {
  let component: SideBarMenuPage;
  let fixture: ComponentFixture<SideBarMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SideBarMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
