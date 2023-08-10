import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WellsPage } from './wells.page';

describe('WellsPage', () => {
  let component: WellsPage;
  let fixture: ComponentFixture<WellsPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(WellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
