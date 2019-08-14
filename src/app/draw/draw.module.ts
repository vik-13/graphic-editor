import { NgModule } from '@angular/core';
import { DrawComponent } from './draw';
import { ControlsModule } from '../components/controls';
import { DrawAreaModule } from '../components/draw-area';

@NgModule({
  declarations: [
    DrawComponent
  ],
  imports: [
    ControlsModule,
    DrawAreaModule
  ],
  exports: [
    DrawComponent
  ]
})
export class DrawModule {}
