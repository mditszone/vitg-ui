import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopicListComponent } from './sub-topic-list.component';

describe('SubTopicListComponent', () => {
  let component: SubTopicListComponent;
  let fixture: ComponentFixture<SubTopicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTopicListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
