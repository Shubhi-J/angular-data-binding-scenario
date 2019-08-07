import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3Component1Component } from './scenario3-component1.component';

describe('Scenario3Component1Component', () => {
  let component: Scenario3Component1Component;
  let fixture: ComponentFixture<Scenario3Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
