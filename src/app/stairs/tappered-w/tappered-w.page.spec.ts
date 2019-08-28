import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapperedWPage } from './tappered-w.page';

describe('TapperedWPage', () => {
  let component: TapperedWPage;
  let fixture: ComponentFixture<TapperedWPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapperedWPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapperedWPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
