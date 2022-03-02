import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidenavOpen = false;
  @Input() navMode = true;
  @Input() activeRoute?:string;
  @Input() navButton = true;
  @Output() menuTrigger = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }
 
  onMenuTrigger(){
    this.menuTrigger.emit();
  }


}

