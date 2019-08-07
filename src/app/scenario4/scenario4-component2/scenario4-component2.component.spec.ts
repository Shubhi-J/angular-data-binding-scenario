import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4Component2Component } from './scenario4-component2.component';

describe('Scenario4Component2Component', () => {
  let component: Scenario4Component2Component;
  let fixture: ComponentFixture<Scenario4Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
