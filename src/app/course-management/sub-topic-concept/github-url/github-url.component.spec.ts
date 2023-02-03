import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUrlComponent } from './github-url.component';

describe('GithubUrlComponent', () => {
  let component: GithubUrlComponent;
  let fixture: ComponentFixture<GithubUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
