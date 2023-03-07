import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainerDocsComponent } from './add-trainer-docs.component';

describe('AddTrainerDocsComponent', () => {
  let component: AddTrainerDocsComponent;
  let fixture: ComponentFixture<AddTrainerDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainerDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrainerDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
