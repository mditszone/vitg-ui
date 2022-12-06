import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCertificationComponent } from './exam-certification.component';

describe('ExamCertificationComponent', () => {
  let component: ExamCertificationComponent;
  let fixture: ComponentFixture<ExamCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
