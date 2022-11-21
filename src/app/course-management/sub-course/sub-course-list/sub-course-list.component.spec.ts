import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCourseListComponent } from './sub-course-list.component';

describe('SubCourseListComponent', () => {
  let component: SubCourseListComponent;
  let fixture: ComponentFixture<SubCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
