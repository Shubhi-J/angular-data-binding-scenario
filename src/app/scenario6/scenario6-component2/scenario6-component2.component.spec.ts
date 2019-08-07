import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Component2Component } from './scenario6-component2.component';

describe('Scenario6Component2Component', () => {
  let component: Scenario6Component2Component;
  let fixture: ComponentFixture<Scenario6Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
