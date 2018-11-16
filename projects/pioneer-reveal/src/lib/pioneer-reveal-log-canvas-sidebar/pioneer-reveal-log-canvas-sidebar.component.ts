import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pioneer-reveal-log-canvas-sidebar',
  templateUrl: './pioneer-reveal-log-canvas-sidebar.component.html',
  styleUrls: ['./pioneer-reveal-log-canvas-sidebar.component.scss']
})
export class PioneerRevealLogCanvasSidebarComponent implements OnInit {
  @Output() indexSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onIndexSelected(indexName: string) {
    this.indexSelected.emit(indexName);
  }
}
