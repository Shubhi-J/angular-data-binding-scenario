import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Scenario2Component1Component } from './scenario2/scenario2-component1/scenario2-component1.component';
import { Scenario3Component1Component } from './scenario3/scenario3-component1/scenario3-component1.component';
import { Scenario3Component2Component } from './scenario3/scenario3-component2/scenario3-component2.component';
import { Scenario4Component1Component } from './scenario4/scenario4-component1/scenario4-component1.component';
import { Scenario4Component2Component } from './scenario4/scenario4-component2/scenario4-component2.component';
import { Scenario5Component1Component } from './scenario5/scenario5-component1/scenario5-component1.component';
import { Scenario5Component2Component } from './scenario5/scenario5-component2/scenario5-component2.component';
import { Scenario5Component3Component } from './scenario5/scenario5-component3/scenario5-component3.component';
import { Scenario6Component1Component } from './scenario6/scenario6-component1/scenario6-component1.component';
import { Scenario6Component2Component } from './scenario6/scenario6-component2/scenario6-component2.component';
import { Scenario6Component3Component } from './scenario6/scenario6-component3/scenario6-component3.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Scenario2Component1Component,
    Scenario3Component1Component,
    Scenario3Component2Component,
    Scenario4Component1Component,
    Scenario4Component2Component,
    Scenario5Component1Component,
    Scenario5Component2Component,
    Scenario5Component3Component,
    Scenario6Component1Component,
    Scenario6Component2Component,
    Scenario6Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
