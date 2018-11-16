import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogTableComponent } from './pioneer-reveal-log-table.component';

describe('PioneerRevealLogTableComponent', () => {
  let component: PioneerRevealLogTableComponent;
  let fixture: ComponentFixture<PioneerRevealLogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
