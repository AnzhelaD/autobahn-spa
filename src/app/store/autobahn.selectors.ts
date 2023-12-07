import { createFeatureSelector, createSelector } from '@ngrx/store';
import {RoadState} from "./autobahn.reducer";

export const selectRoadState = createFeatureSelector<RoadState>('road');
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


export const selectAutobahnItem = createSelector(
  selectRoadState,
  (state) => state.autobahnItem
);

export const selectIsOpenDialog = createSelector(
  selectRoadState,
  (state) => state.isOpenDialog
);
