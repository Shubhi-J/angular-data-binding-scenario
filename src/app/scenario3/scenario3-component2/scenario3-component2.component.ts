import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3-component2',
  templateUrl: './scenario3-component2.component.html',
  styleUrls: ['./scenario3-component2.component.css']
})
export class Scenario3Component2Component implements OnInit {

  // take input from parent
  @Input() public parentData;
  
  constructor() { }

  ngOnInit() {
  }

}
