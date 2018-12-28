import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { SearchService } from './search.service';
import { AddFavoritePhoto } from '../favorites/favorites.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  results: any[];

  constructor(
    private searchService: SearchService,
    private store: Store<any[]>
  ) {}

  ngOnInit() {
    this.searchService.search(this.searchTerm$).subscribe(results => {
      this.results = results;
    });
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
