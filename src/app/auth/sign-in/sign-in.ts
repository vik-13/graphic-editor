import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ge-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  constructor(private auth: AngularFireAuth, private router: Router, private snackBar: MatSnackBar) {}

  submit(form: NgForm) {
    if (form.form.valid) {
      this.auth.auth.signInWithEmailAndPassword(form.form.value.email, form.form.value.password).then((data) => {
        this.router.navigate(['/']).then();
      }, (error) => {
        this.snackBar.open('Wrong email or password.', '',  {duration: 5000});
      });
    }
  }
}
