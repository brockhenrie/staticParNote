import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {
  @Input() routes!: {key:string, value:string[]}[];
  @Output() sideNaveTrigger = new EventEmitter<void>();
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onNav(link:string[]){
    this.sideNaveTrigger.emit();
    this.router.navigate(link);
  }

}
