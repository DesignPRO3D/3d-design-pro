import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpaComponent } from './wpa.component';

describe('WpaComponent', () => {
  let component: WpaComponent;
  let fixture: ComponentFixture<WpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
