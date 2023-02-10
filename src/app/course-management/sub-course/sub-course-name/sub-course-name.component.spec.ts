import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCourseNameComponent } from './sub-course-name.component';

describe('SubCourseNameComponent', () => {
  let component: SubCourseNameComponent;
  let fixture: ComponentFixture<SubCourseNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCourseNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCourseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
