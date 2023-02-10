import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubTopicConceptComponent } from './view-sub-topic-concept.component';

describe('ViewSubTopicConceptComponent', () => {
  let component: ViewSubTopicConceptComponent;
  let fixture: ComponentFixture<ViewSubTopicConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubTopicConceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubTopicConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
