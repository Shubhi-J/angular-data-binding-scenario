import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-component2',
  templateUrl: './scenario4-component2.component.html',
  styleUrls: ['./scenario4-component2.component.css']
})
export class Scenario4Component2Component implements OnInit {

  // create object of eventEmitter
  @Output() public childEvent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // emit data from child to parent
  fireEvent(){
    this.childEvent.emit('Hey Parent');
  }

}
