import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  // property name
  public name="";
  
  // method to log the name from template
  log(prmName){
    console.log(prmName);
  }

  // constructor
  constructor() { 
  }

  // onInit
  ngOnInit() {
  }

}
