import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component3',
  templateUrl: './scenario5-component3.component.html',
  styleUrls: ['./scenario5-component3.component.css']
})
export class Scenario5Component3Component implements OnInit {

  // create object of eventEmitter
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // emit message
  fireEvent(){
    this.childEvent.emit('hey parent');
   }

}
