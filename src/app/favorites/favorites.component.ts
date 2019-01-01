import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import {
  CreateFavoritesList,
  EditFavoritesList,
  DownloadFavoritePhoto,
} from './favorites.actions';
import { State } from './favorites.reducer';
import { FavoritesList } from './favorites-list';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<any[]>;
  showEditForm = 0;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.favorites$ = this.store.select('favorites', 'list');
  }

  createList() {
    this.store.dispatch(
      new CreateFavoritesList(new FavoritesList('Test 1', 'Test 1 desc'))
    );
  }

  editList(listId, fields) {
    this.store.dispatch(
      new EditFavoritesList({
        listId,
        ...fields,
      })
    );
    this.showEditForm = 0;
  }

  downloadPhoto(photo) {
    this.store.dispatch(new DownloadFavoritePhoto({ photo }));
  }

  toggleEditForm(listId: number) {
    this.showEditForm = listId;
  }
}
