import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3Component2Component } from './scenario3-component2.component';

describe('Scenario3Component2Component', () => {
  let component: Scenario3Component2Component;
  let fixture: ComponentFixture<Scenario3Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
