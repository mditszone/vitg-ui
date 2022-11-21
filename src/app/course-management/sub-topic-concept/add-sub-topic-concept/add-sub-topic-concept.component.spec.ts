import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubTopicConceptComponent } from './add-sub-topic-concept.component';

describe('AddSubTopicConceptComponent', () => {
  let component: AddSubTopicConceptComponent;
  let fixture: ComponentFixture<AddSubTopicConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubTopicConceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubTopicConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
