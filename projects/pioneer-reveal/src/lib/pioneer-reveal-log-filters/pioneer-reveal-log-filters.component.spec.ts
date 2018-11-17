import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogFiltersComponent } from './pioneer-reveal-log-filters.component';

describe('PioneerRevealLogFiltersComponent', () => {
  let component: PioneerRevealLogFiltersComponent;
  let fixture: ComponentFixture<PioneerRevealLogFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
