import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { DRAW_STORE } from './draw.states';
import { drawReducer } from './draw.reducers';
import { EffectsModule } from '@ngrx/effects';
import { DrawEffects } from './draw.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(DRAW_STORE, drawReducer),
    EffectsModule.forFeature([DrawEffects])
  ]
})
export class DrawStoreModule {}
