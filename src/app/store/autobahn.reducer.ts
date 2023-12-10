import { createReducer, on } from '@ngrx/store';
import {
  closeDialog,
  getStarted,
  loadRoads,
  loadRoadsSuccess,
  openDialog,
  setAutobahnItem,
  setData,
  setDynamicId
} from './autobahn.actions';
import { IAutobahnItem, IData } from '../IAutobahn';

export interface RoadState {
  startApp: boolean;
  loading: boolean;
  dynamicId: string | null;
  roads: string[];
  data: IData[] | [];
  isOpenDialog: boolean;
  autobahnItem: IAutobahnItem | null;
}

export const initialState: RoadState = {
  startApp: false,
  roads: [],
  dynamicId: null,
  loading: false,
  data: [],
  autobahnItem: null,
  isOpenDialog: false
};

export const AutobahnReducer = createReducer(
  initialState,
  on(getStarted, (state) => ({ ...state, startApp: true, loading: true })),
  on(loadRoads, (state, { roads }) => ({ ...state, roads })),
  on(loadRoadsSuccess, (state, { roads }) => ({
    ...state,
    roads,
    error: null,
    loading: false
  })),
  on(setDynamicId, (state, { dynamicId }) => ({
    ...state,
    dynamicId
  })),
  on(setData, (state, { data }) => ({
    ...state,
    data,
    loading: false
  })),
  on(setAutobahnItem, (state, { autobahnItem }) => ({
    ...state,
    autobahnItem: autobahnItem
  })),
  on(openDialog, (state) => ({ ...state, isOpenDialog: true })),
  on(closeDialog, (state) => ({ ...state, isOpenDialog: false }))
);
