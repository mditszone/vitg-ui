import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcourseTabsComponent } from './subcourse-tabs.component';

describe('SubcourseTabsComponent', () => {
  let component: SubcourseTabsComponent;
  let fixture: ComponentFixture<SubcourseTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcourseTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcourseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
