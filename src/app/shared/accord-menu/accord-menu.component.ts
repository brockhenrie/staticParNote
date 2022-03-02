import { FormGroup } from '@angular/forms';
import { AccordMenu } from './accord-menu.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accord-menu',
  templateUrl: './accord-menu.component.html',
  styleUrls: ['./accord-menu.component.scss']
})
export class AccordMenuComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Input() panels!:AccordMenu[];

  form!:FormGroup;
  constructor() { }


  ngOnInit(): void {
  }

}
