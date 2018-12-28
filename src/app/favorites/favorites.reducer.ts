import * as favorites from './favorites.actions';
import { FavoritesList } from './favorites-list';

export interface State {
  list: FavoritesList[];
}

export const initialState: State = {
  list: [],
};

export function reducer(
  state: State = initialState,
  action: favorites.FavoritesActions
): State {
  switch (action.type) {
    case favorites.FavoritesActionTypes.CreateFavoritesList: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }

    case favorites.FavoritesActionTypes.AddFavoritePhoto: {
      return {
        ...state,
        list: state.list.map(list => {
          if (list.id === action.payload.listId) {
            list.photos.push(action.payload.photo);
          }
          return list;
        }),
      };
    }

    default:
      return state;
  }
}
