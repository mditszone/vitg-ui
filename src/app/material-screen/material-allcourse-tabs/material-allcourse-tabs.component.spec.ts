import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAllcourseTabsComponent } from './material-allcourse-tabs.component';

describe('MaterialAllcourseTabsComponent', () => {
  let component: MaterialAllcourseTabsComponent;
  let fixture: ComponentFixture<MaterialAllcourseTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAllcourseTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialAllcourseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
