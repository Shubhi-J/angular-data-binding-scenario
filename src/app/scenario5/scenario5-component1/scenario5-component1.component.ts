import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario5-component1',
  templateUrl: './scenario5-component1.component.html',
  styleUrls: ['./scenario5-component1.component.css']
})
export class Scenario5Component1Component implements OnInit {

  // property for app-scenario5-component2
  public message="";
  
  constructor() { }

  ngOnInit() {
  }

}
