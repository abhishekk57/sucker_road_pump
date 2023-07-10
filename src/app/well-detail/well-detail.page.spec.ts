import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WellDetailPage } from './well-detail.page';

describe('WellDetailPage', () => {
  let component: WellDetailPage;
  let fixture: ComponentFixture<WellDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WellDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
