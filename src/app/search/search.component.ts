import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { SearchService } from './search.service';
import {
  AddFavoritePhoto,
  CreateFavoritesList,
} from '../favorites/favorites.actions';
import { ExecuteSearch } from './search.actions';
import { Favorite } from '../shared/favorite';
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
  favorites$: Observable<Favorite[]>;
  selectedFavorite: Favorite;
  showAddForm = false;

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

  addToFavorites(favorite, photo, shouldCreate = false) {
    if (shouldCreate) {
      this.store.dispatch(new CreateFavoritesList(favorite));
    }

    if (favorite) {
      this.store.dispatch(
        new AddFavoritePhoto({
          listId: favorite.id,
          photo,
        })
      );
      this.modalService.close('favoritesModal');
      this.modalService.resetModalData('favoritesModal');
      this.showAddForm = false;
    }
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }
}
