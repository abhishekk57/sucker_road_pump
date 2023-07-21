import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtFilterComponent } from './alrt-filter.component';

describe('AlrtFilterComponent', () => {
  let component: AlrtFilterComponent;
  let fixture: ComponentFixture<AlrtFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlrtFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
