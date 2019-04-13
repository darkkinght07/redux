import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { PartyListComponent } from './views/party-list/party-list.component';
import { AppStoreService } from './store/service/app-store.service';
import { MockAppStore } from './store/test-utils/test.store';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PartyListComponent
      ],
      providers: [
        AppStoreService,
        {
          provide: Store,
          useClass: MockAppStore
        }
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({})
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });

  it('initial values in form are invalid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.form.get('firstName').value).toBe('');
    expect(component.form.get('password').value).toBe('');
    expect(component.form.valid).toBeFalsy();
  });

  it('update fields for a valid form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.form.patchValue({ firstName: 'name', password: 'pwd' });

    expect(component.form.get('firstName').value).toBe('name');
    expect(component.form.get('password').value).toBe('pwd');
    expect(component.form.valid).toBeTruthy();
  });
});
