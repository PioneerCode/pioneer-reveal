import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PioneerRevealComponent } from './pioneer-reveal.component';
import { PioneerRevealLogRowComponent } from './pioneer-reveal-log-row/pioneer-reveal-log-row.component';
import { PioneerRevealLogTableComponent } from './pioneer-reveal-log-table/pioneer-reveal-log-table.component';
import { PioneerRevealLogIndexesComponent } from './pioneer-reveal-log-indexes/pioneer-reveal-log-indexes.component';
import { PioneerRevealLogCanvasComponent } from './pioneer-reveal-log-canvas/pioneer-reveal-log-canvas.component';
import { PioneerRevealLogCanvasSidebarComponent } from './pioneer-reveal-log-canvas-sidebar/pioneer-reveal-log-canvas-sidebar.component';
import { PioneerRevealLogRowExpandedComponent } from './pioneer-reveal-log-row-expanded/pioneer-reveal-log-row-expanded.component';
import { PioneerRevealLogFiltersComponent } from './pioneer-reveal-log-filters/pioneer-reveal-log-filters.component';

@NgModule({
  declarations: [
    PioneerRevealComponent,
    PioneerRevealLogRowComponent,
    PioneerRevealLogTableComponent,
    PioneerRevealLogIndexesComponent,
    PioneerRevealLogCanvasComponent,
    PioneerRevealLogCanvasSidebarComponent,
    PioneerRevealLogRowExpandedComponent,
    PioneerRevealLogFiltersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [PioneerRevealComponent]
})
export class PioneerRevealModule { }
