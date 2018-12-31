import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { SearchService } from './search.service';
import { AddFavoritePhoto } from '../favorites/favorites.actions';
import { ExecuteSearch } from './search.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  lastSearchTerm$: Observable<string>;
  results$: Observable<any[]>;

  constructor(
    private searchService: SearchService,
    private store: Store<any[]>
  ) {}

  ngOnInit() {
    this.searchTerm$.subscribe(searchTerm => {
      if (searchTerm) {
        this.store.dispatch(new ExecuteSearch({ searchTerm }));
      }
    });

    this.lastSearchTerm$ = this.store.select('search', 'searchTerm');
    this.results$ = this.store.select('search', 'results');
  }

  addToFavorites(photo) {
    this.store.dispatch(
      new AddFavoritePhoto({
        listId: 'test-1',
        photo,
      })
    );
  }
}
