import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTabsComponent } from './student-tabs.component';

describe('StudentTabsComponent', () => {
  let component: StudentTabsComponent;
  let fixture: ComponentFixture<StudentTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
