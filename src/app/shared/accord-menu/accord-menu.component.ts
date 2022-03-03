import { FormGroup } from '@angular/forms';
import { AccordMenu } from './accord-menu.model';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accord-menu',
  templateUrl: './accord-menu.component.html',
  styleUrls: ['./accord-menu.component.scss']
})
export class AccordMenuComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Input() panels!:AccordMenu[];
  @Output() ext = new EventEmitter();

  form!:FormGroup;
  constructor() { }


  ngOnInit(): void {
  }

  onExtChanges(ext:string){
    this.ext.emit(ext)
  }

}
