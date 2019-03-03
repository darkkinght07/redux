import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducerHomePage } from './store/reducers/app.reducers';
import { PartyListComponent } from './party-list/party-list.component';
import { AppEffects } from './store/effects/app.efects';
import { PartyService } from './services/party.service';

@NgModule({
  declarations: [
    AppComponent,
    PartyListComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    StoreModule.forRoot({homePage: reducerHomePage}), 
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [PartyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
