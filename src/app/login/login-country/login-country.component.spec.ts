import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCountryComponent } from './login-country.component';

describe('LoginCountryComponent', () => {
  let component: LoginCountryComponent;
  let fixture: ComponentFixture<LoginCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
