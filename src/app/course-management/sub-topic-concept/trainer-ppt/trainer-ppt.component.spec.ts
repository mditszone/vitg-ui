import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPptComponent } from './trainer-ppt.component';

describe('TrainerPptComponent', () => {
  let component: TrainerPptComponent;
  let fixture: ComponentFixture<TrainerPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerPptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
