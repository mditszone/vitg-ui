import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicConceptYoutubeUrlComponent } from './subtopic-concept-youtube-url.component';

describe('SubtopicConceptYoutubeUrlComponent', () => {
  let component: SubtopicConceptYoutubeUrlComponent;
  let fixture: ComponentFixture<SubtopicConceptYoutubeUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtopicConceptYoutubeUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtopicConceptYoutubeUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
