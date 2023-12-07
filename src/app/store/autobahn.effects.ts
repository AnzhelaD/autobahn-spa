import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, switchMap} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  getStarted, loadClosure, loadElectricCharging,
  loadParkingLorry,
  loadRoadsFailure,
  loadRoadsSuccess,
  loadRoadworks, loadWarning,
  loadWebCams,
  setData,
} from './autobahn.actions';
import {AutobahnService} from "../service/autobahn.service";


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
      mergeMap(action => {
        return  this.autobahnService.getRoadworks(action.id).pipe(
          map(data => setData({ data: data?.roadworks }))
        )
      })
    )
  );

  loadWebCams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWebCams),
      mergeMap(action => {
        return  this.autobahnService.getWebCams(action.id).pipe(
          map(data => setData({ data: data?.webcam }))
        )
      }))
  );

  loadParkingLorry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadParkingLorry),
      mergeMap(action => {
        return this.autobahnService.getParkingLorry(action.id).pipe(
          map(data => {
            return setData({data: data['parking_lorry']})
          })
        )
        }
      )
    )
  );

  loadElectricCharging$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadElectricCharging),
      mergeMap(action =>
        this.autobahnService.getElectricCharging(action.id).pipe(
          map(data => {
            return setData({ data: data[Object.keys(data)[0]] })
          } )
        )
      )
    )
  );
  loadWarning$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWarning),
      mergeMap(action => {
          return this.autobahnService.getWarning(action.id).pipe(
            map(data => {
              return setData({data: data?.warning})
            })
          )
        }
      )
    )
  );

  loadClosure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadClosure),
      mergeMap(action => {
          return this.autobahnService.getClosure(action.id).pipe(
            map(data => {
              return setData({data: data?.closure})
            })
          )
        }
      )
    )
  );

  constructor(private actions$: Actions, private autobahnService: AutobahnService) {}
}

