import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5Component2Component } from './scenario5-component2.component';

describe('Scenario5Component2Component', () => {
  let component: Scenario5Component2Component;
  let fixture: ComponentFixture<Scenario5Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
