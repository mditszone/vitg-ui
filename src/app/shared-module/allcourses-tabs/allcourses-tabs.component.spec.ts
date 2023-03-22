import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcoursesTabsComponent } from './allcourses-tabs.component';

describe('AllcoursesTabsComponent', () => {
  let component: AllcoursesTabsComponent;
  let fixture: ComponentFixture<AllcoursesTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcoursesTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcoursesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
