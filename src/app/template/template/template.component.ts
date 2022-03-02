import { Template } from './../template.model';
import { TemplateService } from './../template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  templates:Template[] = [];
  activeTemplate!: Template;

  constructor(
    private ts: TemplateService
  ) { }

  ngOnInit(): void {
    this.templates = this.ts.getTemplates();
  }

  onFormSelect(event: any){
    this.activeTemplate = event.value as Template;
    console.log(this.activeTemplate)
  }

  onCopyForm(){
    const formValue = this.activeTemplate.form.value;
    this.ts.copyActiveForm(formValue);
    this.activeTemplate.form.reset();
  }

  onResetForm(){
    this.activeTemplate.form.reset();
  }

}
