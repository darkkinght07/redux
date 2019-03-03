import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PartyListComponent } from './party-list/party-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { TestStore } from './store/test-utils/test.store';
import { AppState } from './store/app.state';
import { reducerHomePage } from './store/reducers/app.reducers';
import { by } from 'protractor';

describe('AppComponent', () => {

  let store: TestStore<AppState>;
  let testState: AppState = {
    homePage: {
      loaded: true,
      partyList: [{
        code: '1',
        name: 'party 1'
      }]
    }
  }

  beforeEach( ( () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PartyListComponent
      ],
      providers: [
        { provide: Store, useClass: TestStore }   // use test store instead of ngrx store
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({homePage: reducerHomePage})
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });

  it('check initial state of the components', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.form.get('firstName').value).toBe('');
    expect(component.form.get('password').value).toBe('');
    expect(component.form.valid).toBeFalsy();
  });

  it('create a valid form', inject([Store], (testStore: TestStore<AppState>) => {
    let fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    component.form.patchValue({'firstName': 'name', 'password': 'pwd'});

    expect(component.form.get('firstName').value).toBe('name');
    expect(component.form.get('password').value).toBe('pwd');
    expect(component.form.valid).toBeTruthy();
  }));
});
