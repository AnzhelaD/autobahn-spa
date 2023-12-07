import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {forkJoin, of, switchMap} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  getStarted, loadElectricCharging,
  loadParkingLorry,
  loadRoadsFailure,
  loadRoadsSuccess,
  loadRoadworks,
  loadWebCams,
  setData,
} from './autobahn.actions';
import {AutobahnService} from "../service/autobahn.service";
import {IAutobahn} from "../IAutobahn";

@Injectable()
export class AutobahnEffects {
  loadRoads$ = createEffect(() => this.actions$.pipe(
    ofType(getStarted),
    switchMap(() => this.autobahnService.getRoads()),
    map(roadsData => loadRoadsSuccess({ roads: roadsData.roads })),
    catchError(error => of(loadRoadsFailure({ error })))
  ));

  loadRoadworks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRoadworks),
      mergeMap(action =>
        this.autobahnService.getRoadworks(action.id).pipe(
          map(data => setData({ data: data?.roadworks }))
        )
      )
    )
  );

  loadWebCams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWebCams),
      mergeMap(action =>
        this.autobahnService.getWebCams(action.id).pipe(
          map(data => setData({ data }))
        )
      )
    )
  );

  loadParkingLorry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadParkingLorry),
      mergeMap(action =>
        this.autobahnService.getParkingLorry(action.id).pipe(
          map(data => setData({ data }))
        )
      )
    )
  );

  loadElectricCharging$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadElectricCharging),
      mergeMap(action =>
        this.autobahnService.getElectricCharging(action.id).pipe(
          map(data => setData({ data }))
        )
      )
    )
  );
  constructor(private actions$: Actions, private autobahnService: AutobahnService) {}
}

