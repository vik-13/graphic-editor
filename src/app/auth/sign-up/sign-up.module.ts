import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule {}
