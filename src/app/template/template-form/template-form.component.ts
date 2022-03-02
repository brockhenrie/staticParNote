import { Template, TemplateQuestionConfig } from './../template.model';
import { FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';
import { Component, forwardRef, Input, OnInit } from '@angular/core';

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
  selectionChange(event: Event){

  }

  private _initFormConfig(form: FormGroup, config: TemplateQuestionConfig[]){
    let i = 0;
    while(i < config.length){
      const formConfig:QuestionConfig = {
        questionConfig: config[i],
        formControl: form.get(config[i].formControlName) as AbstractControl
      }
      this.formConfig.push(formConfig);
    }
  }
}


export interface QuestionConfig {
  questionConfig: TemplateQuestionConfig,
  formControl:AbstractControl
}
