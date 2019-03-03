import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../../models/party.model';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent {

  @Input()
  partyList: Party[];

}
