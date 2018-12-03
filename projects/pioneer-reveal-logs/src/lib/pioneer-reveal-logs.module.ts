import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

import { PioneerRevealLogComponent } from './pioneer-reveal-logs.component';
import { PioneerRevealLogCanvasComponent } from './pioneer-reveal-logs-canvas/pioneer-reveal-log-canvas.component';
import { PioneerRevealLogTopBarComponent } from './pioneer-reveal-logs-top-bar/pioneer-reveal-log-top-bar.component';
import { PioneerRevealLogCanvasSidebarComponent } from './pioneer-reveal-logs-canvas-sidebar/pioneer-reveal-log-canvas-sidebar.component';
import { PioneerRevealLogTableComponent } from './pioneer-reveal-logs-table/pioneer-reveal-log-table.component';
import { PioneerRevealLogRowComponent } from './pioneer-reveal-logs-row/pioneer-reveal-log-row.component';
import { PioneerRevealLogRowExpandedComponent } from './pioneer-reveal-logs-row-expanded/pioneer-reveal-log-row-expanded.component';
import { PioneerRevealLogIndexesComponent } from './pioneer-reveal-logs-indexes/pioneer-reveal-log-indexes.component';
import { PioneerRevealLogFiltersComponent } from './pioneer-reveal-logs-filters/pioneer-reveal-log-filters.component';
// tslint:disable-next-line:max-line-length
import { PioneerRevealLogsApplicationAggregationComponent } from './pioneer-reveal-logs-application-aggregation/pioneer-reveal-logs-application-aggregation.component';
import { ServiceLocator } from './service-locator.service';
import { PioneerRevealLogsFieldsComponent } from './pioneer-reveal-logs-fields/pioneer-reveal-logs-fields.component';

@NgModule({
  declarations: [
    PioneerRevealLogComponent,
    PioneerRevealLogRowComponent,
    PioneerRevealLogTableComponent,
    PioneerRevealLogIndexesComponent,
    PioneerRevealLogCanvasComponent,
    PioneerRevealLogCanvasSidebarComponent,
    PioneerRevealLogRowExpandedComponent,
    PioneerRevealLogTopBarComponent,
    PioneerRevealLogsApplicationAggregationComponent,
    PioneerRevealLogFiltersComponent,
    PioneerRevealLogsFieldsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  exports: [PioneerRevealLogComponent]
})
export class PioneerRevealLogsModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
