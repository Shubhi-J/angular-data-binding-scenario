import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component2',
  templateUrl: './scenario5-component2.component.html',
  styleUrls: ['./scenario5-component2.component.css']
})
export class Scenario5Component2Component implements OnInit {

  // create object of eventEmitter
  @Output() public parentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // emit data to parent
  onEvent(value){
    this.parentEvent.emit(value);
  }

}
