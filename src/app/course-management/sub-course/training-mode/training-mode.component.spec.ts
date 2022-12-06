import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingModeComponent } from './training-mode.component';

describe('TrainingModeComponent', () => {
  let component: TrainingModeComponent;
  let fixture: ComponentFixture<TrainingModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
