import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepnessPage } from './stepness.page';

describe('StepnessPage', () => {
  let component: StepnessPage;
  let fixture: ComponentFixture<StepnessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepnessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
