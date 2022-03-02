import { Component, Input, OnInit } from '@angular/core';
import { formFieldConfig } from '../accord-menu.model';

@Component({
  selector: 'app-accord-content-display',
  templateUrl: './accord-content-display.component.html',
  styleUrls: ['./accord-content-display.component.scss']
})
export class AccordContentDisplayComponent implements OnInit {
  @Input() config!: formFieldConfig[];
  displayedColumns = ['name', 'placeholder'];
  constructor() { }

  ngOnInit(): void {
  }

}
