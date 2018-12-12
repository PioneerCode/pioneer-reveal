import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowFieldsComponent } from './row-fields.component';

describe('RowFieldsComponent', () => {
  let component: RowFieldsComponent;
  let fixture: ComponentFixture<RowFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
