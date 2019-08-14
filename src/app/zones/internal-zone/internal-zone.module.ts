import { NgModule } from '@angular/core';
import { InternalZoneComponent } from './internal-zone';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    InternalZoneComponent
  ],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    InternalZoneComponent
  ]
})
export class InternalZoneModule {}
