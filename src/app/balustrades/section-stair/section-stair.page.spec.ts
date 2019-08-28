import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStairPage } from './section-stair.page';

describe('SectionStairPage', () => {
  let component: SectionStairPage;
  let fixture: ComponentFixture<SectionStairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStairPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
