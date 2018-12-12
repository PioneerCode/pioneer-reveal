import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogIndexesComponent } from './pioneer-reveal-log-indexes.component';

describe('PioneerRevealLogIndexesComponent', () => {
  let component: PioneerRevealLogIndexesComponent;
  let fixture: ComponentFixture<PioneerRevealLogIndexesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogIndexesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogIndexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
