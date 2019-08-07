import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6-component3',
  templateUrl: './scenario6-component3.component.html',
  styleUrls: ['./scenario6-component3.component.css']
})
export class Scenario6Component3Component implements OnInit {

  // take input from parent
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
