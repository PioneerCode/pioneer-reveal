import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogCanvasComponent } from './pioneer-reveal-log-canvas.component';

describe('PioneerRevealLogCanvasComponent', () => {
  let component: PioneerRevealLogCanvasComponent;
  let fixture: ComponentFixture<PioneerRevealLogCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
