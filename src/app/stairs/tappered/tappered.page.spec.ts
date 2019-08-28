import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapperedPage } from './tappered.page';

describe('TapperedPage', () => {
  let component: TapperedPage;
  let fixture: ComponentFixture<TapperedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapperedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapperedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
