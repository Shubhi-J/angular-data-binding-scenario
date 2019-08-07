import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5Component3Component } from './scenario5-component3.component';

describe('Scenario5Component3Component', () => {
  let component: Scenario5Component3Component;
  let fixture: ComponentFixture<Scenario5Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
