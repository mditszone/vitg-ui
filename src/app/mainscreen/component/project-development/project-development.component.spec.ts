import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDevelopmentComponent } from './project-development.component';

describe('ProjectDevelopmentComponent', () => {
  let component: ProjectDevelopmentComponent;
  let fixture: ComponentFixture<ProjectDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
