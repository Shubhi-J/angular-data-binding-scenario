import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5Component1Component } from './scenario5-component1.component';

describe('Scenario5Component1Component', () => {
  let component: Scenario5Component1Component;
  let fixture: ComponentFixture<Scenario5Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
