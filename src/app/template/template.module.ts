import { TemplateService } from './template.service';
import { TemplateRoutingModule } from './template-routing.module';
import { MaterialsModule } from './../shared/materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormQuestionComponent } from './template-form-question/template-form-question.component';



@NgModule({
  declarations: [
    TemplateComponent,
    TemplateFormComponent,
    TemplateFormQuestionComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TemplateService
  ]
})
export class TemplateModule { }
