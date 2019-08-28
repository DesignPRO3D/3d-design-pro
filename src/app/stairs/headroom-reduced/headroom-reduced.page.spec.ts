import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadroomReducedPage } from './headroom-reduced.page';

describe('HeadroomReducedPage', () => {
  let component: HeadroomReducedPage;
  let fixture: ComponentFixture<HeadroomReducedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadroomReducedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadroomReducedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
