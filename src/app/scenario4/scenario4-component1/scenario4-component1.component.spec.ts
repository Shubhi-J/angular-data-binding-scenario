import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4Component1Component } from './scenario4-component1.component';

describe('Scenario4Component1Component', () => {
  let component: Scenario4Component1Component;
  let fixture: ComponentFixture<Scenario4Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
