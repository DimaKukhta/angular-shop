import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsFooterComponent } from './contacts-footer.component';

describe('ContactsFooterComponent', () => {
  let component: ContactsFooterComponent;
  let fixture: ComponentFixture<ContactsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
