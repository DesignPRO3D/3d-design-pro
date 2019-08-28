import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeKitesPage } from './three-kites.page';

describe('ThreeKitesPage', () => {
  let component: ThreeKitesPage;
  let fixture: ComponentFixture<ThreeKitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeKitesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeKitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
