import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoursesMenuComponent } from './all-courses-menu.component';

describe('AllCoursesMenuComponent', () => {
  let component: AllCoursesMenuComponent;
  let fixture: ComponentFixture<AllCoursesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCoursesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCoursesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
