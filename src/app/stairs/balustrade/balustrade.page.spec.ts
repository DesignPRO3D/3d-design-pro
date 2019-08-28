import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalustradePage } from './balustrade.page';

describe('BalustradePage', () => {
  let component: BalustradePage;
  let fixture: ComponentFixture<BalustradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalustradePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalustradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
