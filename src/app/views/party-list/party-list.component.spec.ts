import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PartyListComponent } from './party-list.component';

describe('PartyListComponent', () => {
  let component: PartyListComponent;
  let fixture: ComponentFixture<PartyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartyListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PartyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
