import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PioneerRevealLogModule } from 'projects/pioneer-reveal-log/src/lib/pioneer-reveal-log.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PioneerRevealLogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
