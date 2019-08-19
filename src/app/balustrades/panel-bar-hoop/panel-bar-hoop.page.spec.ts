import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBarHoopPage } from './panel-bar-hoop.page';

describe('PanelBarHoopPage', () => {
  let component: PanelBarHoopPage;
  let fixture: ComponentFixture<PanelBarHoopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBarHoopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBarHoopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
