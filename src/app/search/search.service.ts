import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  pluck,
  tap,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';

import { environment } from '../../environments/environment';

const headers = new HttpHeaders({
  Authorization: `Client-ID ${environment.unsplashAccessKey}`,
});

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(searchTerm: string): Observable<any[]> {
    return this.http
      .get(`${environment.unsplashApiUrl}/search/photos`, {
        headers,
        params: { query: searchTerm },
      })
      .pipe(pluck('results'));
  }
}
