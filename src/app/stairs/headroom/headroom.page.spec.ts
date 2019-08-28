import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadroomPage } from './headroom.page';

describe('HeadroomPage', () => {
  let component: HeadroomPage;
  let fixture: ComponentFixture<HeadroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadroomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
