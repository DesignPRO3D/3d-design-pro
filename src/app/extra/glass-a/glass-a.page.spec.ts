import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassAPage } from './glass-a.page';

describe('GlassAPage', () => {
  let component: GlassAPage;
  let fixture: ComponentFixture<GlassAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
