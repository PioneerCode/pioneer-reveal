import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogsApplicationAggregationComponent } from './pioneer-reveal-logs-application-aggregation.component';

describe('PioneerRevealLogsApplicationAggregationComponent', () => {
  let component: PioneerRevealLogsApplicationAggregationComponent;
  let fixture: ComponentFixture<PioneerRevealLogsApplicationAggregationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogsApplicationAggregationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogsApplicationAggregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
