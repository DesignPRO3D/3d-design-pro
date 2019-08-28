import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageValidationPage } from './page-validation.page';

describe('PageValidationPage', () => {
  let component: PageValidationPage;
  let fixture: ComponentFixture<PageValidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageValidationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
