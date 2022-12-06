import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationDaysComponent } from './duration-days.component';

describe('DurationDaysComponent', () => {
  let component: DurationDaysComponent;
  let fixture: ComponentFixture<DurationDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurationDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
