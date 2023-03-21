import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySubcourseComponent } from './faculty-subcourse.component';

describe('FacultySubcourseComponent', () => {
  let component: FacultySubcourseComponent;
  let fixture: ComponentFixture<FacultySubcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultySubcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultySubcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
