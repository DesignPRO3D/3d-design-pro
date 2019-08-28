import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreadDPage } from './tread-d.page';

describe('TreadDPage', () => {
  let component: TreadDPage;
  let fixture: ComponentFixture<TreadDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreadDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreadDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
