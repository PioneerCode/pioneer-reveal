import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PioneerRevealLogComponent } from './pioneer-reveal-log.component';
import { PioneerRevealLogCanvasComponent } from './pioneer-reveal-log-canvas/pioneer-reveal-log-canvas.component';
import { PioneerRevealLogTopBarComponent } from './pioneer-reveal-log-top-bar/pioneer-reveal-log-top-bar.component';
import { PioneerRevealLogCanvasSidebarComponent } from './pioneer-reveal-log-canvas-sidebar/pioneer-reveal-log-canvas-sidebar.component';
import { PioneerRevealLogTableComponent } from './pioneer-reveal-log-table/pioneer-reveal-log-table.component';
import { PioneerRevealLogRowComponent } from './pioneer-reveal-log-row/pioneer-reveal-log-row.component';
import { PioneerRevealLogRowExpandedComponent } from './pioneer-reveal-log-row-expanded/pioneer-reveal-log-row-expanded.component';
import { PioneerRevealLogIndexesComponent } from './pioneer-reveal-log-indexes/pioneer-reveal-log-indexes.component';
import { PioneerRevealLogFiltersComponent } from './pioneer-reveal-log-filters/pioneer-reveal-log-filters.component';

@NgModule({
  declarations: [
    PioneerRevealLogComponent,
    PioneerRevealLogTopBarComponent,
    PioneerRevealLogCanvasComponent,
    PioneerRevealLogTableComponent,
    PioneerRevealLogRowComponent,
    PioneerRevealLogRowExpandedComponent,
    PioneerRevealLogCanvasSidebarComponent,
    PioneerRevealLogIndexesComponent,
    PioneerRevealLogFiltersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [PioneerRevealLogComponent]
})
export class PioneerRevealLogModule { }
