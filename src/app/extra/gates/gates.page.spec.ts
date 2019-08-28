import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatesPage } from './gates.page';

describe('GatesPage', () => {
  let component: GatesPage;
  let fixture: ComponentFixture<GatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
