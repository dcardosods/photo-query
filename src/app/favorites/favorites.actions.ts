import { Action } from '@ngrx/store';

import { Favorite } from '../shared/favorite';

export enum FavoritesActionTypes {
  CreateFavoritesList = '[Favorites] Create Favorites List',
  EditFavoritesList = '[Favorites] Edit Favorites List',
  AddFavoritePhoto = '[Favorites List] Add Favorite Photo',
  DownloadFavoritePhoto = '[Favorites List] Download Favorite Photo',
  DownloadOk = '[Favorites List] Download Ok',
}

export class CreateFavoritesList implements Action {
  readonly type = FavoritesActionTypes.CreateFavoritesList;

  constructor(public payload: Favorite) {}
}

export class EditFavoritesList implements Action {
  readonly type = FavoritesActionTypes.EditFavoritesList;

  constructor(
    public payload: {
      listId: number;
      name?: string;
      description?: string;
    }
  ) {}
}

export class AddFavoritePhoto implements Action {
  readonly type = FavoritesActionTypes.AddFavoritePhoto;

  constructor(
    public payload: {
      listId: number;
      photo: any;
    }
  ) {}
}

export class DownloadFavoritePhoto implements Action {
  readonly type = FavoritesActionTypes.DownloadFavoritePhoto;

  constructor(public payload: { photo: any }) {}
}

export class DownloadOk implements Action {
  readonly type = FavoritesActionTypes.DownloadOk;

  constructor(public payload: { photo: any }) {}
}

export type FavoritesActions =
  | CreateFavoritesList
  | EditFavoritesList
  | AddFavoritePhoto
  | DownloadFavoritePhoto
  | DownloadOk;
