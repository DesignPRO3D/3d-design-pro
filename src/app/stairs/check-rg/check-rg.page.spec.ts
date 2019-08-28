import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRGPage } from './check-rg.page';

describe('CheckRGPage', () => {
  let component: CheckRGPage;
  let fixture: ComponentFixture<CheckRGPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRGPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
