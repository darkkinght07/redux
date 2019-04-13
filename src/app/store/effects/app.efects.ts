import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { FETCH_PARTIES, SetPartiesAction } from '../actions/app.actions';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { PartyService } from 'src/app/services/party.service';

@Injectable()
export class AppEffects {

    @Effect()
    fetchParties: Observable<Action> = this.actions$.pipe(
        ofType(FETCH_PARTIES),
        map(() => {
            const partyList = this.partyService.getPartyList();
            return new SetPartiesAction(partyList);
        }));

    constructor(private actions$: Actions, private partyService: PartyService) { }
}
