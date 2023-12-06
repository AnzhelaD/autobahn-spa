import { createFeatureSelector, createSelector } from '@ngrx/store';
import {RoadState} from "./autobahn.reducer";
export const selectRoadState = createFeatureSelector<RoadState>('road');

export const selectStartApp = createSelector(
  selectRoadState,
  (state) => state?.startApp
);

export const selectRoads = createSelector(
  selectRoadState,
  (state) => state.roads
);
export const selectLoading = createSelector(
  selectRoadState,
  (state) => state.loading
);
