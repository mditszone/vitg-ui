import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyTrainerComponent } from './verify-trainer.component';

describe('VerifyTrainerComponent', () => {
  let component: VerifyTrainerComponent;
  let fixture: ComponentFixture<VerifyTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
