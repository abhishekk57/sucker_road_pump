import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WellDetailPage } from './well-detail.page';

describe('WellDetailPage', () => {
  let component: WellDetailPage;
  let fixture: ComponentFixture<WellDetailPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(WellDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
