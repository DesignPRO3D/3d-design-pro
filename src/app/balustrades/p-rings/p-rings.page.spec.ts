import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRingsPage } from './p-rings.page';

describe('PRingsPage', () => {
  let component: PRingsPage;
  let fixture: ComponentFixture<PRingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
