import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PioneerLogsErrorHandler } from './pioneer-logs-error.handler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsModule } from './logs/logs.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogsModule,
    CoreModule,
    LoginModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: PioneerLogsErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
