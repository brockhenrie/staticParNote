import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { routes } from '../routes';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  sidenavOpen = false;
  activeRoute = 'Home';
   routes = routes;

  @Input('cdkAutosizeMinRows') minRows= 4;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(){
    this.sidenavOpen = !this.sidenavOpen;
  }

}
