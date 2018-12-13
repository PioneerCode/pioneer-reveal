import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
