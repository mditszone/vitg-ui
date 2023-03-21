import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFacultySidebarComponent } from './material-faculty-sidebar.component';

describe('MaterialFacultySidebarComponent', () => {
  let component: MaterialFacultySidebarComponent;
  let fixture: ComponentFixture<MaterialFacultySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialFacultySidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialFacultySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
