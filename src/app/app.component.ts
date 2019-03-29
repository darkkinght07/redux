import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Party } from './models/party.model';
import { Observable } from 'rxjs';
import { AppStoreService } from './store/service/app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  partyList$: Observable<Party[]>;

  constructor(private appStateService: AppStoreService) { }

  ngOnInit() {
    this.initForm();
    this.subscribeToPartyList();
  }

  onSubmit() {
    this.appStateService.fetchParties();
  }

  private initForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  private subscribeToPartyList(): void {
    this.partyList$ = this.appStateService.getPartyList();
  }
}
