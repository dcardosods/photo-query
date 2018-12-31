import * as search from './search.actions';

export interface State {
  searchTerm: string;
  results: any[];
}

export const initialState: State = {
  searchTerm: '',
  results: [],
};

export function reducer(
  state: State = initialState,
  action: search.SearchActions
): State {
  switch (action.type) {
    case search.SearchActionTypes.ExecuteSearch: {
      return { ...state, searchTerm: action.payload.searchTerm };
    }

    case search.SearchActionTypes.SearchOk: {
      return {
        ...state,
        results: action.payload.results,
      };
    }

    default:
      return state;
  }
}
