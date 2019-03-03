import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { reducerHomePage } from './reducers/app.reducers';
import { Party } from '../models/party.model';

export interface AppState {
  homePage: HomePageState
}

export interface HomePageState {
  loaded: boolean;
  partyList: Party[]
}
// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
