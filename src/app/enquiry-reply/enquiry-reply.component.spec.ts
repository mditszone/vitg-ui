import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryReplyComponent } from './enquiry-reply.component';

describe('EnquiryReplyComponent', () => {
  let component: EnquiryReplyComponent;
  let fixture: ComponentFixture<EnquiryReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
