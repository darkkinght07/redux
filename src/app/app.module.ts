import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartyListComponent } from './views/party-list/party-list.component';

import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from './store/effects/app.efects';
import { PartyService } from './services/party.service';
import { AppStateReducers } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    PartyListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppStateReducers),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [PartyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
