import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class DrawEffects {
  constructor(private _actions$: Actions) {}
}
