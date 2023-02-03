import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubcourseComponent } from './student-subcourse.component';

describe('StudentSubcourseComponent', () => {
  let component: StudentSubcourseComponent;
  let fixture: ComponentFixture<StudentSubcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSubcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
