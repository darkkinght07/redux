import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Party } from 'src/app/models/party.model';
import { partyListSelector } from '../selectors/app.selector';
import { FetchPartiesAction } from '../actions/app.actions';

@Injectable()
export class AppStoreService {

    constructor(private store: Store<AppState>) { }

    getPartyList(): Observable<Party[]> {
        return this.store.pipe(select(partyListSelector));
    }

    fetchParties(): void {
        this.store.dispatch(new FetchPartiesAction());
    }
}