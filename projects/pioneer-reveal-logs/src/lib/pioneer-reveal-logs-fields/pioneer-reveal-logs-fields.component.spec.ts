import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogsFieldsComponent } from './pioneer-reveal-logs-fields.component';

describe('PioneerRevealLogsFieldsComponent', () => {
  let component: PioneerRevealLogsFieldsComponent;
  let fixture: ComponentFixture<PioneerRevealLogsFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogsFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogsFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
