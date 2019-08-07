import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3-component1',
  templateUrl: './scenario3-component1.component.html',
  styleUrls: ['./scenario3-component1.component.css']
})
export class Scenario3Component1Component implements OnInit {
  
  // set the property name in parent component
  public name="Shubhi";
  constructor() { }

  ngOnInit() {
  }

}
