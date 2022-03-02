
import { FormGroup } from '@angular/forms';

export class Template implements TemplateFormConfiguration {
  constructor(
    public templateName: string,
    public questionConfigs: TemplateQuestionConfig[],
    public form: FormGroup
  ) {}
}

export interface TemplateFormConfiguration {
  templateName: string;
  questionConfigs: TemplateQuestionConfig[];
}
export interface TemplateQuestionConfig {
  formControlName: string;
  type: QuestionType;
  label: string;
  initValue?: any;
  options?: string[];
  required?: boolean;
}

export type QuestionType = 'radio' | 'select' | 'checkbox' | 'input';

