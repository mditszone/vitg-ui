import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubCourseComponent } from './view-sub-course.component';

describe('ViewSubCourseComponent', () => {
  let component: ViewSubCourseComponent;
  let fixture: ComponentFixture<ViewSubCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
