import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSityComponent } from './select-sity.component';

describe('SelectSityComponent', () => {
  let component: SelectSityComponent;
  let fixture: ComponentFixture<SelectSityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
