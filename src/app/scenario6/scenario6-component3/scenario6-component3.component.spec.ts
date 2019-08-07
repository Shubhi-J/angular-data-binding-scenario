import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Component3Component } from './scenario6-component3.component';

describe('Scenario6Component3Component', () => {
  let component: Scenario6Component3Component;
  let fixture: ComponentFixture<Scenario6Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
