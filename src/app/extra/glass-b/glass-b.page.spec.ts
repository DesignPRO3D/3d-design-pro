import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassBPage } from './glass-b.page';

describe('GlassBPage', () => {
  let component: GlassBPage;
  let fixture: ComponentFixture<GlassBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassBPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
