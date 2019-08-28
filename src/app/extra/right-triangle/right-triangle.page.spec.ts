import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTrianglePage } from './right-triangle.page';

describe('RightTrianglePage', () => {
  let component: RightTrianglePage;
  let fixture: ComponentFixture<RightTrianglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightTrianglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightTrianglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
