import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExtraPage } from './list-extra.page';

describe('ListExtraPage', () => {
  let component: ListExtraPage;
  let fixture: ComponentFixture<ListExtraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExtraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExtraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
