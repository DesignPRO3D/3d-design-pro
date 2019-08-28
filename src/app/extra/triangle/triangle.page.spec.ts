import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrianglePage } from './triangle.page';

describe('TrianglePage', () => {
  let component: TrianglePage;
  let fixture: ComponentFixture<TrianglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrianglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrianglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
