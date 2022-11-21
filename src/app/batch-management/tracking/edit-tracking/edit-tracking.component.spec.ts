import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrackingComponent } from './edit-tracking.component';

describe('EditTrackingComponent', () => {
  let component: EditTrackingComponent;
  let fixture: ComponentFixture<EditTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
