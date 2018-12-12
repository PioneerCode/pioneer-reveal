import { NgModule } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CanvasComponent
  ],
  exports: [
    CanvasComponent
  ]
})
export class LoginModule { }
