import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { routes } from '../routes';
import { Setting, ControlService } from './control.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  routes = routes;
  dataSource!:Setting[];
  displayedColumns = ['Setting','Current', 'Switch'];
title="Settings";
  constructor(
    private cs:ControlService,
    private ts: Title
    ) { }

  ngOnInit(): void {
this.ts.setTitle(this.title);
    this.dataSource = this.cs.getSettings();
  }

  saveSettings(){
      this.cs.saveSettings(this.dataSource);
  }
  onSaveSetting(setting:{label:string, currentValue:boolean},i:number){
    console.log(setting, i)
  }

}
