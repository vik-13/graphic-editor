import { NgModule } from '@angular/core';
import { ControlsComponent } from './controls';
import { CardModule } from '../card';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    ControlsComponent
  ],
  imports: [
    CardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ControlsComponent
  ]
})
export class ControlsModule {}
