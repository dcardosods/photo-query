import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

import * as search from './search.actions';
import { SearchService } from './search.service';

@Injectable()
export class SearchEffects {
  @Effect()
  executeSearch$: Observable<Action> = this.actions$.pipe(
    ofType<search.ExecuteSearch>(search.SearchActionTypes.ExecuteSearch),
    map(action => action.payload.searchTerm),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(searchTerm => {
      return this.searchService
        .search(searchTerm)
        .pipe(map(results => new search.SearchOk({ results })));
    })
  );

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}
}
