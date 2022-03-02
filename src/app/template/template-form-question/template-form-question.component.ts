import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateQuestionConfig } from '../template.model';

@Component({
  selector: 'app-template-form-question',
  templateUrl: './template-form-question.component.html',
  styleUrls: ['./template-form-question.component.scss']
})
export class TemplateFormQuestionComponent implements OnInit {
  @Input() questionConfig:TemplateQuestionConfig = {
    formControlName: '',
    type: 'radio',
    label: ''
  }
  value:any;
  form!:FormGroup;
  @Output() valueUpdate = new EventEmitter();
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control
  }

  get formControl(){
    return this.form.controls[this.questionConfig.formControlName]
  }

  onUpdateValue(formControlName:string, value:any){
    this.valueUpdate.emit({
      formControlName: this.questionConfig.formControlName,
      value: value,
    })
  }

}



