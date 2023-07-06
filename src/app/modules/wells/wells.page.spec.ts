import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WellsPage } from './wells.page';

describe('WellsPage', () => {
  let component: WellsPage;
  let fixture: ComponentFixture<WellsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
