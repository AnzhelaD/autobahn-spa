import { createFeatureSelector, createSelector } from '@ngrx/store';
import {RoadState} from "./autobahn.reducer";
import {setDynamicId} from "./autobahn.actions";
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

export const selectDynamicId = createSelector(
  selectRoadState,
  (state) => state.dynamicId
);
export const selectData = createSelector(
  selectRoadState,
  (state) => state.data
);

export const selectSelectedTab = createSelector(
  selectRoadState,
  (state) => state.selectedTab
);
