import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { formFieldConfig } from '../accord-menu.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formConfig!: formFieldConfig[];
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
