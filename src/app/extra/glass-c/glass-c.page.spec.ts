import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassCPage } from './glass-c.page';

describe('GlassCPage', () => {
  let component: GlassCPage;
  let fixture: ComponentFixture<GlassCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
