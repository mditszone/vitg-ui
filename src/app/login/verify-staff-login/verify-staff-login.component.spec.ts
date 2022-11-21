import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyStaffLoginComponent } from './verify-staff-login.component';

describe('VerifyStaffLoginComponent', () => {
  let component: VerifyStaffLoginComponent;
  let fixture: ComponentFixture<VerifyStaffLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyStaffLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyStaffLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
