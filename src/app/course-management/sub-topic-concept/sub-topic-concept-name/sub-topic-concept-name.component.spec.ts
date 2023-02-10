import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopicConceptNameComponent } from './sub-topic-concept-name.component';

describe('SubTopicConceptNameComponent', () => {
  let component: SubTopicConceptNameComponent;
  let fixture: ComponentFixture<SubTopicConceptNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTopicConceptNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTopicConceptNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
