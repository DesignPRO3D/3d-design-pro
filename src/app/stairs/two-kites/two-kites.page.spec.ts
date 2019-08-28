import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoKitesPage } from './two-kites.page';

describe('TwoKitesPage', () => {
  let component: TwoKitesPage;
  let fixture: ComponentFixture<TwoKitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoKitesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoKitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
