import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Component1Component } from './scenario6-component1.component';

describe('Scenario6Component1Component', () => {
  let component: Scenario6Component1Component;
  let fixture: ComponentFixture<Scenario6Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
