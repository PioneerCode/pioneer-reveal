import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogRowExpandedComponent } from './pioneer-reveal-log-row-expanded.component';

describe('PioneerRevealLogRowExpandedComponent', () => {
  let component: PioneerRevealLogRowExpandedComponent;
  let fixture: ComponentFixture<PioneerRevealLogRowExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogRowExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogRowExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
