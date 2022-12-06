import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationHoursComponent } from './duration-hours.component';

describe('DurationHoursComponent', () => {
  let component: DurationHoursComponent;
  let fixture: ComponentFixture<DurationHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurationHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
