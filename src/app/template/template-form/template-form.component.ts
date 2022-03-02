import { Template, TemplateQuestionConfig } from './../template.model';
import { FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>TemplateFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>TemplateFormComponent),
      multi: true
    }
  ]
})
export class TemplateFormComponent implements OnInit {
  @Input() template:Template = {
    templateName: '',
    questionConfigs: [],
    form: new FormGroup({})
  };
  formConfig: QuestionConfig[] = []
  constructor() { }


  ngOnInit(): void {

  }
  updateValue(event: any){
    const name = event.formControlName
    this.template.form.patchValue({[name]: event.value})
    this.template.form.updateValueAndValidity();
  }

}


export interface QuestionConfig {
  questionConfig: TemplateQuestionConfig,
  formControl:AbstractControl
}
