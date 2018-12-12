import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PioneerRevealLogComponent } from './logs.component';
import { PioneerRevealLogCanvasComponent } from './canvas/pioneer-reveal-log-canvas.component';
import { PioneerRevealLogTopBarComponent } from './top-bar/pioneer-reveal-log-top-bar.component';
import { PioneerRevealLogCanvasSidebarComponent } from './canvas-sidebar/pioneer-reveal-log-canvas-sidebar.component';
import { PioneerRevealLogTableComponent } from './table/pioneer-reveal-log-table.component';
import { PioneerRevealLogRowComponent } from './row/pioneer-reveal-log-row.component';
import { PioneerRevealLogRowExpandedComponent } from './row-expanded/pioneer-reveal-log-row-expanded.component';
import { PioneerRevealLogIndexesComponent } from './indexes/pioneer-reveal-log-indexes.component';
import { PioneerRevealLogFiltersComponent } from './filters/pioneer-reveal-log-filters.component';
import { ApplicationAggregationComponent } from './application-aggregation/application-aggregation.component';
import { PioneerRevealLogsFieldsComponent } from './fields/pioneer-reveal-logs-fields.component';
import { PioneerRevealLogsRowFieldsComponent } from './row-fields/pioneer-reveal-logs-row-fields.component';

import { ServiceLocator } from './service-locator.service';

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
    ApplicationAggregationComponent,
    PioneerRevealLogFiltersComponent,
    PioneerRevealLogsFieldsComponent,
    PioneerRevealLogsRowFieldsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatSnackBarModule
  ],
  exports: [PioneerRevealLogComponent]
})
export class LogsModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
