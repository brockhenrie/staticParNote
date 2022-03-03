import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  sidenavOpen = false;
  activeRoute = 'Home';
  routes:{key:string, value:string[]}[] = [
    {key:'Home', value:['home']},
    {key:'Templates', value:['template']},
    {key:'Task Notes', value:['taskNotes']},
    {key:'Note Pad', value:['notepad']},
  ]

  @Input('cdkAutosizeMinRows') minRows= 4;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(){
    this.sidenavOpen = !this.sidenavOpen;
  }

}
