import { createSelector } from "@ngrx/store";
import { AppState, HomePageState } from '../app.state'

export const homePageSelector = createSelector((state: AppState) => state.homePage);
export const partyListSelector = createSelector(homePageSelector, (state: HomePageState) => state.partyList);