import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { SearchService } from './search.service';
import { AddFavoritePhoto } from '../favorites/favorites.actions';
import { ExecuteSearch } from './search.actions';
import { FavoritesList } from '../favorites/favorites-list';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  lastSearchTerm$: Observable<string>;
  results$: Observable<any[]>;
  favorites$: Observable<FavoritesList[]>;
  selectedFavorite: FavoritesList;

  constructor(
    private searchService: SearchService,
    private store: Store<any[]>,
    public modalService: NgxSmartModalService
  ) {}

  ngOnInit() {
    this.searchTerm$.subscribe(searchTerm => {
      if (searchTerm) {
        this.store.dispatch(new ExecuteSearch({ searchTerm }));
      }
    });

    this.lastSearchTerm$ = this.store.select('search', 'searchTerm');
    this.results$ = this.store.select('search', 'results');
    this.favorites$ = this.store.select('favorites', 'list');
    this.favorites$.subscribe(favorites => {
      if (favorites.length) {
        this.selectedFavorite = favorites[0];
      }
    });
  }

  openFavoritesModal(data) {
    this.modalService.getModal('favoritesModal').open();
    this.modalService.setModalData(data, 'favoritesModal');
  }

  addToFavorites(photo) {
    if (this.selectedFavorite) {
      this.store.dispatch(
        new AddFavoritePhoto({
          listId: this.selectedFavorite.id,
          photo,
        })
      );
      this.modalService.close('favoritesModal');
    }
  }
}
