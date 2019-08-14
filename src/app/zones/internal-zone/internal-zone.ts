import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'chat-internal-zone',
  templateUrl: './internal-zone.html',
  styleUrls: ['./internal-zone.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InternalZoneComponent {
  constructor(private auth: AngularFireAuth, private router: Router) {}
  signOut() {
    this.auth.auth.signOut().then(() => {
      this.router.navigate(['/sign-in']).then();
    });
  }
}
