import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PioneerRevealLogComponent } from './logs.component';
import { CanvasComponent } from './canvas/canvas.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CanvasSidebarComponent } from './canvas-sidebar/canvas-sidebar.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { RowExpandedComponent } from './row-expanded/row-expanded.component';
import { IndexesComponent } from './indexes/indexes.component';
import { FiltersComponent } from './filters/filters.component';
import { ApplicationAggregationComponent } from './application-aggregation/application-aggregation.component';
import { FieldsComponent } from './fields/fields.component';
import { RowFieldsComponent } from './row-fields/row-fields.component';

import { ServiceLocator } from './service-locator.service';

@NgModule({
  declarations: [
    PioneerRevealLogComponent,
    RowComponent,
    TableComponent,
    IndexesComponent,
    CanvasComponent,
    CanvasSidebarComponent,
    RowExpandedComponent,
    TopBarComponent,
    ApplicationAggregationComponent,
    FiltersComponent,
    FieldsComponent,
    RowFieldsComponent
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
