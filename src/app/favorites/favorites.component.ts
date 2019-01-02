import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { EditFavoritesList, DownloadFavoritePhoto } from './favorites.actions';
import { State } from './favorites.reducer';
import { Favorite } from '../shared/favorite';

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
