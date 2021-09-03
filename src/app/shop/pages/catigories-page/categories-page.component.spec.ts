import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatigoriesPageComponent } from './categories-page.component';

describe('CatigoriesPageComponent', () => {
  let component: CatigoriesPageComponent;
  let fixture: ComponentFixture<CatigoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatigoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatigoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
