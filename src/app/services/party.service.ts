import { Party } from '../models/party.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PartyService {
    getPartyList(): Party[] {
        const partyList: Party[] = [];
        partyList.push(new Party('1', 'Party number 1'));
        partyList.push(new Party('2', 'Number twoooooooo'));

        return partyList;
    }
}
