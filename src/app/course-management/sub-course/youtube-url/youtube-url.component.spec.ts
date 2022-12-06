import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeUrlComponent } from './youtube-url.component';

describe('YoutubeUrlComponent', () => {
  let component: YoutubeUrlComponent;
  let fixture: ComponentFixture<YoutubeUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
