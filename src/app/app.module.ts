import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PioneerRevealModule } from 'projects/pioneer-reveal/src/lib/pioneer-reveal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PioneerRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
