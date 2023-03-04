import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExampleComponent } from './view-example.component';

describe('ViewExampleComponent', () => {
  let component: ViewExampleComponent;
  let fixture: ComponentFixture<ViewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
