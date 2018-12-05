import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogsRowFieldsComponent } from './pioneer-reveal-logs-row-fields.component';

describe('PioneerRevealLogsRowFieldsComponent', () => {
  let component: PioneerRevealLogsRowFieldsComponent;
  let fixture: ComponentFixture<PioneerRevealLogsRowFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogsRowFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogsRowFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
