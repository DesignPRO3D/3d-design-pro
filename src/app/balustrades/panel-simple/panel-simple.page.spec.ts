import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSimplePage } from './panel-simple.page';

describe('PanelSimplePage', () => {
  let component: PanelSimplePage;
  let fixture: ComponentFixture<PanelSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
