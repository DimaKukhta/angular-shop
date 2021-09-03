import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatygoriesHeaderComponent } from './catygories-header.component';

describe('CatygoriesHeaderComponent', () => {
  let component: CatygoriesHeaderComponent;
  let fixture: ComponentFixture<CatygoriesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatygoriesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatygoriesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
