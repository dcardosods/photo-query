import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  ExecuteSearch = '[Search] Execute Search',
  SearchOk = '[Search] Search Ok',
}

export class ExecuteSearch implements Action {
  readonly type = SearchActionTypes.ExecuteSearch;

  constructor(public payload: { searchTerm: string }) {}
}

export class SearchOk implements Action {
  readonly type = SearchActionTypes.SearchOk;

  constructor(public payload: { results: any[] }) {}
}

export type SearchActions = ExecuteSearch | SearchOk;
