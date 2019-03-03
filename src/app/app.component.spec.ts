import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { reducerHomePage } from './store/reducers/app.reducers';
import { PartyListComponent } from './views/party-list/party-list.component';

describe('AppComponent', () => {

  beforeEach( ( () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PartyListComponent
      ],
      providers: [
        Store
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({homePage: reducerHomePage})
      ]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });

  it('initial values in form are invalid', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.form.get('firstName').value).toBe('');
    expect(component.form.get('password').value).toBe('');
    expect(component.form.valid).toBeFalsy();
  });

  it('update fields for a valid form', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    component.form.patchValue({'firstName': 'name', 'password': 'pwd'});

    expect(component.form.get('firstName').value).toBe('name');
    expect(component.form.get('password').value).toBe('pwd');
    expect(component.form.valid).toBeTruthy();
  });
});
