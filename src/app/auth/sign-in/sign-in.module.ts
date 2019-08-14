import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule {}
