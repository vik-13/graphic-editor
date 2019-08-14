import { NgModule } from '@angular/core';
import { AuthZoneComponent } from './auth-zone';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthZoneComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    AuthZoneComponent
  ]
})
export class AuthZoneModule {}
