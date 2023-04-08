import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWCountryComponent } from './login-w-country.component';

describe('LoginWCountryComponent', () => {
  let component: LoginWCountryComponent;
  let fixture: ComponentFixture<LoginWCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
