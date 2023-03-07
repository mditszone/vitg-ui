import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamplesComponent } from './add-examples.component';

describe('AddExamplesComponent', () => {
  let component: AddExamplesComponent;
  let fixture: ComponentFixture<AddExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
