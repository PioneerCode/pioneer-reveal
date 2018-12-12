import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasSidebarComponent } from './canvas-sidebar.component';

describe('CanvasSidebarComponent', () => {
  let component: CanvasSidebarComponent;
  let fixture: ComponentFixture<CanvasSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
