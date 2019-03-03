import { createSelector } from "@ngrx/store";
import { AppState } from '../app.state'

export const homePageSelector = createSelector( (state: AppState) => state.homePage);
export const partyListSelector = createSelector( homePageSelector, state => state.partyList);