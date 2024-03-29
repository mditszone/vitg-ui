import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookShareComponent } from './facebook-share.component';

describe('FacebookShareComponent', () => {
  let component: FacebookShareComponent;
  let fixture: ComponentFixture<FacebookShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
