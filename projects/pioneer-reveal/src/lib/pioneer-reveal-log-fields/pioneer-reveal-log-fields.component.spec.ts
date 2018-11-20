import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneerRevealLogFieldsComponent } from './pioneer-reveal-log-fields.component';

describe('PioneerRevealLogFieldsComponent', () => {
  let component: PioneerRevealLogFieldsComponent;
  let fixture: ComponentFixture<PioneerRevealLogFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerRevealLogFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneerRevealLogFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
