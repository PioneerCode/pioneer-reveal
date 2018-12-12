import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogComponent } from './logs.component';

describe('PioneerRevealLogComponent', () => {
  let component: PioneerRevealLogComponent;
  let fixture: ComponentFixture<PioneerRevealLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
