import { DrawState } from './draw.states';
import { Action, createReducer, on } from '@ngrx/store';
import * as DrawActions from './draw.actions';

const initialState: DrawState = {
  size: null,
  viewSize: null,
  _info: {
    ready: false
  }
};

const reducer = createReducer(
  initialState,
  on(DrawActions.SetSize, (state, {payload}) => {
    return {
      ...state,
      size: payload
    };
  }),
  on(DrawActions.SetViewSize, (state, {payload}) => {
    return {
      ...state,
      viewSize: payload
    };
  }),
  on(DrawActions.Reset, (state) => {
    return {
      ...initialState,
      _info: {
        ...initialState._info
      }
    };
  })
);

export function drawReducer(state: DrawState | undefined, action: Action) {
  return reducer(state, action);
}
