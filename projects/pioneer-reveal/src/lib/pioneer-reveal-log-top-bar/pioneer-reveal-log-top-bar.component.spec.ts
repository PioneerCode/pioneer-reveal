import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogTopBarComponent } from './pioneer-reveal-log-top-bar.component';

describe('PioneerRevealLogTopBarComponent', () => {
  let component: PioneerRevealLogTopBarComponent;
  let fixture: ComponentFixture<PioneerRevealLogTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
