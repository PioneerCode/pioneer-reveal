import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealComponent } from './pioneer-reveal.component';

describe('PioneerRevealComponent', () => {
  let component: PioneerRevealComponent;
  let fixture: ComponentFixture<PioneerRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
