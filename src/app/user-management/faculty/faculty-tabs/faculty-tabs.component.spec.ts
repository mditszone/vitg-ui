import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTabsComponent } from './faculty-tabs.component';

describe('FacultyTabsComponent', () => {
  let component: FacultyTabsComponent;
  let fixture: ComponentFixture<FacultyTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
