import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavOpen = false;
  activeRoute = 'Par';
  routes: string[] = ['Home', 'PAR', 'QFC', 'Word Tracts', 'Note Pad Only'];

  @Input('cdkAutosizeMinRows') minRows= 4;

  constructor() { }

  ngOnInit(): void {
  }

}
