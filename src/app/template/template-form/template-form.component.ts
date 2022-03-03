import { Template, TemplateQuestionConfig } from './../template.model';
import { FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { TemplateService } from '../template.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
 activeTemplate$:Observable<Template> =this.ts.getActiveForm();

  formConfig: QuestionConfig[] = [];
  change = 0

  constructor(private ts : TemplateService) { }


  ngOnInit(): void {

  }
  ngOnChanges(){
    this.change++;
    console.log(this.change);
  }
  updateValue(template:Template,event: any){
    const name = event.formControlName;
    let value = event.value;
    if(event.type === 'checkbox'){
      if(!template.form.get(name)?.value){
        template.form.patchValue({[name]: false})
      }
      value = value ? 'Yes' : 'No';
    }
    template.form.patchValue({[name]: value})

    template.form.updateValueAndValidity();
    
  }

}


export interface QuestionConfig {
  questionConfig: TemplateQuestionConfig,
  formControl:AbstractControl
}
