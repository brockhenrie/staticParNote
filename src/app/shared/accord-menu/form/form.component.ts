import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { formFieldConfig } from '../accord-menu.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formConfig!: formFieldConfig[];
  @Input() form!: FormGroup;
  @Output() ext = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChanges(name:string, value: string){
    if(!this.form)return
    if(name !== 'personalExtension') return;
    this.ext.emit(value);
  }

}
