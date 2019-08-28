import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreadCPage } from './tread-c.page';

describe('TreadCPage', () => {
  let component: TreadCPage;
  let fixture: ComponentFixture<TreadCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreadCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreadCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
