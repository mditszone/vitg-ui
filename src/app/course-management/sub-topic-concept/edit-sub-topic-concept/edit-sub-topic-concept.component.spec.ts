import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubTopicConceptComponent } from './edit-sub-topic-concept.component';

describe('EditSubTopicConceptComponent', () => {
  let component: EditSubTopicConceptComponent;
  let fixture: ComponentFixture<EditSubTopicConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubTopicConceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubTopicConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
