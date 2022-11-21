import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubTopicComponent } from './add-sub-topic.component';

describe('AddSubTopicComponent', () => {
  let component: AddSubTopicComponent;
  let fixture: ComponentFixture<AddSubTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
