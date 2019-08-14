import { createFeatureSelector } from '@ngrx/store';

export const DRAW_STORE = 'draw';

export interface Size {
  x: number;
  y: number;
}

export interface Info {
  ready: boolean;
}

export interface DrawState {
  size: Size;
  viewSize: Size;
  _info: Info;
}

export const drawSelector = createFeatureSelector<DrawState>(DRAW_STORE);
