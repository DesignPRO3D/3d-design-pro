import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PStairPage } from './p-stair.page';

describe('PStairPage', () => {
  let component: PStairPage;
  let fixture: ComponentFixture<PStairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PStairPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PStairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
