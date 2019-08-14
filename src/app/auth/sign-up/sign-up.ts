import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'ge-sign-up',
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {}

  submit(form: NgForm) {
    if (form.form.valid) {
      this.auth.auth.createUserWithEmailAndPassword(form.form.value.email, form.form.value.password).then(() => {
        this.router.navigate(['/']).then();
      });
    }
  }
}
