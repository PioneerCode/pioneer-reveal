import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAggregationComponent } from './application-aggregation.component';

describe('ApplicationAggregationComponent', () => {
  let component: ApplicationAggregationComponent;
  let fixture: ComponentFixture<ApplicationAggregationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationAggregationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAggregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
