import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreadAPage } from './tread-a.page';

describe('TreadAPage', () => {
  let component: TreadAPage;
  let fixture: ComponentFixture<TreadAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreadAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreadAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
