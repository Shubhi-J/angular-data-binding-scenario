import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scenario6-component2',
  templateUrl: './scenario6-component2.component.html',
  styleUrls: ['./scenario6-component2.component.css']
})
export class Scenario6Component2Component implements OnInit {

  // emit data to parent
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // fire event to emit data to parent
  fireEvent(){
    this.childEvent.emit('data from child 1');
  }

}
