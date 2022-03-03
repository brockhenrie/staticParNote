import { Template } from './../template.model';
import { TemplateService } from './../template.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  templates:Template[] = [];
  activeTemplate$:Observable<Template> = this.ts.getActiveForm();


  constructor(
    private ts: TemplateService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.templates = this.ts.getTemplates();
  }

  onFormSelect(event: any){
    this.ts.setActiveForm(event.value as Template);
  }

  onCopyForm(template:Template){
    const formValue = template.form.value;
    this.ts.copyForm(formValue, template.questionConfigs);
    template.form.reset();
    this.router.navigate(['/'])
  }

  onResetForm(template:Template){
    template.form.reset();
    template.form.updateValueAndValidity();

  }

}
