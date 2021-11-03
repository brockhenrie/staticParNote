import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavOpen = false;

  routes: string[] = ['Home', 'PAR', 'QFC', 'Word Tracts', 'Note Pad Only'];
  activeRoute = 'Note Buddy';


  @Input('cdkAutosizeMinRows') minRows= 4;

  constructor(private fd: FormDataService,
    private router:Router) { }



  ngOnInit(): void {
    this.activeRoute = this.fd.getActiveRoute();


  }



}
