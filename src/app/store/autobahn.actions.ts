import { createAction, props } from '@ngrx/store';

export const getStarted = createAction('[Autobahn] Get Started', props<{ startApp: boolean }>());
export const loadRoads = createAction('[Autobahn] Load Roads', props<{ roads: [] }>());
export const loadRoadsSuccess = createAction('[Autobahn] Load Roads Success', props<{ roads: string[] }>());
export const loadRoadsFailure = createAction('[Autobahn] Load Roads Failure', props<{ error: any }>());
