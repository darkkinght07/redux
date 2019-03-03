import { Action } from '@ngrx/store';
import { Party } from 'src/app/models/party.model';

export const FETCH_PARTIES = 'FETCH_PARTIES';
export const SET_PARTIES = 'SET_PARTIES';

export class FetchPartiesAction implements Action {
    readonly type = FETCH_PARTIES;
}

export class SetPartiesAction implements Action {
    readonly type = SET_PARTIES;

    constructor(public payload: Party[]) { }
}

export type AppActions = SetPartiesAction | FetchPartiesAction;