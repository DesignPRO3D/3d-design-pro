import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreadPatternPage } from './tread-pattern.page';

describe('TreadPatternPage', () => {
  let component: TreadPatternPage;
  let fixture: ComponentFixture<TreadPatternPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreadPatternPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreadPatternPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
