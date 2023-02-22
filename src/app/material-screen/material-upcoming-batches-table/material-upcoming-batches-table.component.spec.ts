import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUpcomingBatchesTableComponent } from './material-upcoming-batches-table.component';

describe('MaterialUpcomingBatchesTableComponent', () => {
  let component: MaterialUpcomingBatchesTableComponent;
  let fixture: ComponentFixture<MaterialUpcomingBatchesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUpcomingBatchesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUpcomingBatchesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
