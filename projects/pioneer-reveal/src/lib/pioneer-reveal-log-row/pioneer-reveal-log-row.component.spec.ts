import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogRowComponent } from './pioneer-reveal-log-row.component';

describe('PioneerRevealLogRowComponent', () => {
  let component: PioneerRevealLogRowComponent;
  let fixture: ComponentFixture<PioneerRevealLogRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
