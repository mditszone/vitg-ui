import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBatchesTableComponent } from './upcoming-batches-table.component';

describe('UpcomingBatchesTableComponent', () => {
  let component: UpcomingBatchesTableComponent;
  let fixture: ComponentFixture<UpcomingBatchesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingBatchesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingBatchesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
