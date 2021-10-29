import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavOpen = false;

  @Input('cdkAutosizeMinRows') minRows= 4;

  constructor() { }

  ngOnInit(): void {
  }

}
