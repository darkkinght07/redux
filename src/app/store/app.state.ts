import {
  ActionReducerMap
} from '@ngrx/store';
import { reducerHomePage, initialHomePageState } from './reducers/app.reducers';
import { Party } from '../models/party.model';

export interface AppState {
  homePage: HomePageState;
}
export interface HomePageState {
  loaded: boolean;
  partyList: Party[];
}

export const AppStateReducers: ActionReducerMap<AppState> = {
  homePage: reducerHomePage
};

export const initialAppState: AppState = {
  homePage: initialHomePageState
};
