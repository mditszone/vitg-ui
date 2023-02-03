import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUrlsComponent } from './other-urls.component';

describe('OtherUrlsComponent', () => {
  let component: OtherUrlsComponent;
  let fixture: ComponentFixture<OtherUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherUrlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
