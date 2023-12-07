import { createAction, props } from '@ngrx/store';

export const getStarted = createAction('[Autobahn] Get Started', props<{ startApp: boolean }>());
export const loadRoads = createAction('[Autobahn] Load Roads', props<{ roads: [] }>());
export const loadRoadsSuccess = createAction('[Autobahn] Load Roads Success', props<{ roads: string[] }>());
export const loadRoadsFailure = createAction('[Autobahn] Load Roads Failure', props<{ error: any }>());
export const setDynamicId = createAction('[Autobahn] Set Dynamic ID', props<{ dynamicId: string }>());

export const loadRoadworks = createAction('[Autobahn] Load Roadworks', props<{ id: string }>());
export const loadWebCams = createAction('[Autobahn] Load WebCams', props<{ id: string }>());
export const loadParkingLorry = createAction('[Autobahn] Load Parking Lorry', props<{ id: string }>());
export const loadElectricCharging = createAction('[Autobahn] Load Electric Charging', props<{ id: string }>());
export const setData = createAction('[Autobahn] Set Data', props<{ data: any[] }>());
export const setSelectedTab = createAction('[Autobahn] Set Selected Tab', props<{ dataType: string }>());
