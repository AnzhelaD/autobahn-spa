import { createAction, props } from '@ngrx/store';
import {IAutobahnItem, IData} from "../IAutobahn";

export const getStarted = createAction('[Autobahn] Get Started', props<{ startApp: boolean }>());
export const loadRoads = createAction('[Autobahn] Load Roads', props<{ roads: [] }>());
export const loadRoadsSuccess = createAction('[Autobahn] Load Roads Success', props<{ roads: string[] }>());
export const loadRoadsFailure = createAction('[Autobahn] Load Roads Failure', props<{ error: any }>());
export const setDynamicId = createAction('[Autobahn] Set Dynamic ID', props<{ dynamicId: string }>());
export const loadRoadworks = createAction('[Autobahn] Load Roadworks', props<{ id: string }>());
export const loadWebCams = createAction('[Autobahn] Load WebCams', props<{ id: string }>());
export const loadWarning = createAction('[Autobahn] Load Warning', props<{ id: string }>());
export const loadClosure = createAction('[Autobahn] Load Closure', props<{ id: string }>());
export const loadParkingLorry = createAction('[Autobahn] Load Parking Lorry', props<{ id: string }>());
export const loadElectricCharging = createAction('[Autobahn] Load Electric Charging', props<{ id: string }>());
export const setData = createAction('[Autobahn] Set Data', props<{ data: IData[] }>());
export const setAutobahnItem = createAction('[Autobahn] Autobahn Item', props<{ autobahnItem: IAutobahnItem }>());
export const openDialog = createAction('[Autobahn] Open Dialog');
export const closeDialog = createAction('[Autobahn] Close Dialog');
