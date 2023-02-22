import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchRegisterComponent } from './batch-register.component';

describe('BatchRegisterComponent', () => {
  let component: BatchRegisterComponent;
  let fixture: ComponentFixture<BatchRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
