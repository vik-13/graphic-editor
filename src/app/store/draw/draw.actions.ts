import { createAction, props } from '@ngrx/store';
import { Size } from './draw.states';

export const SetSize = createAction('[Draw] Set size', props<{payload: Size}>());
export const SetViewSize = createAction('[Draw] Set view size', props<{payload: Size}>());
export const Reset = createAction('[Draw] Reset');
