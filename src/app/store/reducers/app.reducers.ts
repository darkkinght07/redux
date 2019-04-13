import { HomePageState } from '../app.state';
import { AppActions, SET_PARTIES } from '../actions/app.actions';

export const initialHomePageState: HomePageState = {
    loaded: false,
    partyList: []
};

export function reducerHomePage(state: HomePageState = initialHomePageState, action: AppActions): HomePageState {
    switch (action.type) {
        case SET_PARTIES:
            return {
                ...state,
                partyList: action.payload
            };

        default:
            return state;
    }
}
