import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InternalZoneGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      map((userState: User | null) => {
        return !!userState;
      }),
      distinctUntilChanged(),
      tap((status: boolean) => {
        if (!status) {
          this.router.navigate(['/sign-in']).then();
        }
      })
    );
  }
}
