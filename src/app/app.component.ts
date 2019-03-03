import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AppState } from './store/app.state';
import { State, Store } from '@ngrx/store';
import { SetPartiesAction, FetchPartiesAction } from './store/actions/app.actions';
import { Party } from './models/party.model';
import { Observable } from 'rxjs';
import { partyListSelector, homePageSelector } from './store/selectors/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  partyList$: Observable<Party[]>;
    
    constructor(private store: Store<AppState>) {
      
        this.partyList$ = store.select(appState => appState.homePage.partyList);
    }

    ngOnInit() {
      this.form = new FormGroup({
          firstName: new FormControl("", Validators.required),
          password: new FormControl("", Validators.required)
      });
    }

    onSubmit() {
      this.store.dispatch(new FetchPartiesAction());
    }
}
