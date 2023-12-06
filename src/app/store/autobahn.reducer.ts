import { createReducer, on } from '@ngrx/store';
import {getStarted, loadRoads, loadRoadsSuccess,} from './autobahn.actions';

export interface RoadState {
  startApp: boolean;
  loading: boolean
  roads: any[];
  cameras: any[];
  chargingStations: any[];
  recreationalZones: any[];
}

export const initialState: RoadState = {
  startApp: false,
  roads: [],
  loading: false,
  cameras: [],
  chargingStations: [],
  recreationalZones: [],
};

export const AutobahnReducer = createReducer(
  initialState,
  on(getStarted, (state, { startApp }) => ({ ...state, startApp: true , loading: true})),
  on(loadRoads, (state, { roads }) => ({ ...state, roads})),
  on(loadRoadsSuccess, (state, { roads }) => ({ ...state, roads, error: null, loading: false  })),
);
