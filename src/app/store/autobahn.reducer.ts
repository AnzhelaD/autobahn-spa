import { createReducer, on } from '@ngrx/store';
import {getStarted, loadRoads, loadRoadsSuccess, setData, setDynamicId, setSelectedTab,} from './autobahn.actions';
import {IAutobahn, IData} from "../IAutobahn";

export interface RoadState {
  startApp: boolean;
  loading: boolean;
  dynamicId: string | null;
  roads: string[];
  selectedTab: string;
  data: IData[] | [];
  cameras: any[];
  roadworks: any[];
  electricCharging: any[];
  parkingLorry: any[];
}

export const initialState: RoadState = {
  startApp: false,
  roads: [],
  dynamicId: null,
  loading: false,
  data: [],
  selectedTab: '',
  roadworks: [],
  cameras: [],
  electricCharging: [],
  parkingLorry: [],
};

export const AutobahnReducer = createReducer(
  initialState,
  on(getStarted, (state, { startApp }) => ({ ...state, startApp: true , loading: true})),
  on(loadRoads, (state, { roads }) => ({ ...state, roads})),
  on(loadRoadsSuccess, (state, { roads }) => ({ ...state, roads, error: null, loading: false  })),
  on(setDynamicId, (state, { dynamicId }) => ({
    ...state,
    dynamicId,
  })),
  on(setData, (state, { data }) => ({
    ...state,
    data,
  })),
  on(setSelectedTab, (state, { dataType }) => ({
    ...state,
    selectedTab: dataType,
  })),

);
