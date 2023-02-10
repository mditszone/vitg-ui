import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopicConceptListComponent } from './sub-topic-concept-list.component';

describe('SubTopicConceptListComponent', () => {
  let component: SubTopicConceptListComponent;
  let fixture: ComponentFixture<SubTopicConceptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTopicConceptListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTopicConceptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
