import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario2Component1Component } from './scenario2-component1.component';

describe('Scenario2Component1Component', () => {
  let component: Scenario2Component1Component;
  let fixture: ComponentFixture<Scenario2Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario2Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario2Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
