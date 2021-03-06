import * as favorites from './favorites.actions';
import { Favorite } from '../shared/favorite';

export interface State {
  list: Favorite[];
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
      return { ...state, list: [...state.list, action.payload] };
    }

    case favorites.FavoritesActionTypes.EditFavoritesList: {
      return {
        ...state,
        list: state.list.map(list => {
          if (list.id === action.payload.listId) {
            if (action.payload.name) {
              list.name = action.payload.name;
            }
            if (action.payload.description) {
              list.description = action.payload.description;
            }
          }
          return list;
        }),
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
