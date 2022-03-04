import { ControlService } from './control/control.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Note Buddy';
  constructor(private cs: ControlService,
    
    private ts: Title){

  }
  ngOnInit(){
    this.ts.setTitle(this.title)
    this.cs.initSettings();
  }
}
