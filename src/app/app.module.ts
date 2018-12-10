import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PioneerLogsErrorHandler } from './pioneer-logs-error.handler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PioneerRevealLogsModule } from 'projects/pioneer-reveal-logs/src/lib/pioneer-reveal-logs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PioneerRevealLogsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: PioneerLogsErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
