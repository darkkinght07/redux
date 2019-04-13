import { createSelector } from '@ngrx/store';
import { AppState, HomePageState } from '../app.state';

export const partyListSelector = createSelector(
    (state: AppState) => state.homePage,
    (state: HomePageState) => state.partyList
);
