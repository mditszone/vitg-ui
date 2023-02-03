import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicConceptTabsComponent } from './subtopic-concept-tabs.component';

describe('SubtopicConceptTabsComponent', () => {
  let component: SubtopicConceptTabsComponent;
  let fixture: ComponentFixture<SubtopicConceptTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtopicConceptTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtopicConceptTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
