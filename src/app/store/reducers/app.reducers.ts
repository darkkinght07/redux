import { ActionReducerMap, Action } from '@ngrx/store';
import { AppState, HomePageState } from '../app.state';
import { FETCH_PARTIES, AppActions, SET_PARTIES, SetPartiesAction } from '../actions/app.actions';

const initialState: HomePageState = {
    loaded: false,
    partyList: []
}

export function reducerHomePage(state: HomePageState = initialState, action: AppActions): HomePageState {
    switch(action.type) {
        case SET_PARTIES: 
            return {
                ...state, 
                partyList: action.payload
            }

        default: 
            return state;
    }
}

