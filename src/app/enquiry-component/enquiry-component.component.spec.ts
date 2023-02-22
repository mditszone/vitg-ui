import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryComponentComponent } from './enquiry-component.component';

describe('EnquiryComponentComponent', () => {
  let component: EnquiryComponentComponent;
  let fixture: ComponentFixture<EnquiryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
