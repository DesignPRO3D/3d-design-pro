import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorsDiffPage } from './floors-diff.page';

describe('FloorsDiffPage', () => {
  let component: FloorsDiffPage;
  let fixture: ComponentFixture<FloorsDiffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorsDiffPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorsDiffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
