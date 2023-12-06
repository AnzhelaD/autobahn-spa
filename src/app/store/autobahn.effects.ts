import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {forkJoin, of, switchMap} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {getStarted, loadRoadsFailure, loadRoadsSuccess,} from './autobahn.actions';
import {AutobahnService} from "../service/autobahn.service";
import {IRoads} from "../IRoads";

@Injectable()
export class AutobahnEffects {
  loadRoads$ = createEffect(() => this.actions$.pipe(
    ofType(getStarted),
    switchMap(() => this.autobahnService.getRoads()),
    map(roadsData => loadRoadsSuccess({ roads: roadsData.roads })),
    catchError(error => of(loadRoadsFailure({ error })))
  ));

  constructor(private actions$: Actions, private autobahnService: AutobahnService) {}
}

