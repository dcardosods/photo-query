import { Action } from '@ngrx/store';

import { FavoritesList } from './favorites-list';

export enum FavoritesActionTypes {
  CreateFavoritesList = '[Favorites] Create Favorites List',
  AddFavoritePhoto = '[Favorites List] Add Favorite Photo',
}

export class CreateFavoritesList implements Action {
  readonly type = FavoritesActionTypes.CreateFavoritesList;

  constructor(public payload: FavoritesList) {}
}

export class AddFavoritePhoto implements Action {
  readonly type = FavoritesActionTypes.AddFavoritePhoto;

  constructor(
    public payload: {
      listId: string;
      photo: any;
    }
  ) {}
}

export type FavoritesActions = CreateFavoritesList | AddFavoritePhoto;
