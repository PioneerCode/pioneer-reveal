import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogCanvasSidebarComponent } from './pioneer-reveal-log-canvas-sidebar.component';

describe('PioneerRevealLogCanvasSidebarComponent', () => {
  let component: PioneerRevealLogCanvasSidebarComponent;
  let fixture: ComponentFixture<PioneerRevealLogCanvasSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogCanvasSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogCanvasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
