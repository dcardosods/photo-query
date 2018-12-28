import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { CreateFavoritesList } from './favorites.actions';
import { State } from './favorites.reducer';
import { FavoritesList } from './favorites-list';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<any[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.favorites$ = this.store.select('favorites', 'list');
  }

  createList() {
    this.store.dispatch(
      new CreateFavoritesList(new FavoritesList('Test 1', 'Test 1 desc'))
    );
  }
}
