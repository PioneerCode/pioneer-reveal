/**
 * Core
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CanvasComponent } from './canvas/canvas.component';

/**
 * Header Content
 */
import { TopBarComponent } from './head/top-bar/top-bar.component';
import { FiltersComponent } from './head/filters/filters.component';

/**
 * Main Content
 */
import { TableComponent } from './main/table/table.component';
import { RowComponent } from './main/row/row.component';
import { RowExpandedComponent } from './main/row-expanded/row-expanded.component';
import { RowFieldsComponent } from './main/row-fields/row-fields.component';


/**
 * Sidebar Content
 */
import { IndexesComponent } from './sidebar/indexes/indexes.component';
import { CanvasSidebarComponent } from './sidebar/canvas-sidebar/canvas-sidebar.component';
import { ApplicationAggregationComponent } from './sidebar/application-aggregation/application-aggregation.component';
import { FieldsComponent } from './sidebar/fields/fields.component';

import { SharedModule } from '../shared/share.module';

@NgModule({
  declarations: [
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
    MatSnackBarModule,
    SharedModule,
    MatPaginatorModule
  ],
  exports: [CanvasComponent]
})
export class LogsModule { }
