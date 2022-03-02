import { QuestionConfig } from './../template-form/template-form.component';
import { AbstractControl, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateQuestionConfig } from '../template.model';
import { QuestionConfig } from '../template-form/template-form.component';

@Component({
  selector: 'app-template-form-question',
  templateUrl: './template-form-question.component.html',
  styleUrls: ['./template-form-question.component.scss']
})
export class TemplateFormQuestionComponent implements OnInit {

  @Input() questionConfigs!:QuestionConfig;

  @Input() questionNumber:number = 0;

  @Output() selectionChange = new EventEmitter();

  FormControl!:AbstractControl;
  questionConfig!:TemplateQuestionConfig;

  constructor() { }

  ngOnInit(): void {
    this.questionConfig = this.questionConfigs.questionConfig;
    this.FormControl = this.questionConfigs.formControl
  }

}



