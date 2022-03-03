import { ControlService } from './control/control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'staticParNote';
  constructor(private cs: ControlService){

  }
  ngOnInit(){
    this.cs.initSettings();
  }
}
