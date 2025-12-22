import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinCountComponent } from './checkin-count.component';

describe('CheckinCountComponent', () => {
  let component: CheckinCountComponent;
  let fixture: ComponentFixture<CheckinCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
