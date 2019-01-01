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
import { HttpClient } from '@angular/common/http';

import * as favorites from './favorites.actions';

@Injectable()
export class FavoritesEffects {
  @Effect()
  downloadFavoritePhoto$: Observable<Action> = this.actions$.pipe(
    ofType<favorites.DownloadFavoritePhoto>(
      favorites.FavoritesActionTypes.DownloadFavoritePhoto
    ),
    map(action => action.payload.photo),
    switchMap(photo => {
      return this.http
        .get(photo.urls.full, { responseType: 'blob' })
        .pipe(
          map(blob => {
            const photoUrl = window.URL.createObjectURL(blob);
            const tag = document.createElement('a');
            tag.href = photoUrl;
            tag.download = `${photo.id}.jpg`;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
          })
        )
        .pipe(map(() => new favorites.DownloadOk({ photo })));
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
