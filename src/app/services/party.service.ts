import { Party } from '../models/party.model';

export class PartyService {
    getPartyList() : Party[] {
        let partyList: Party[] = [];
        partyList.push(new Party('1', 'Party number 1'));
        partyList.push(new Party('2', 'Number twoooooooo'));

        return partyList;
    }
}