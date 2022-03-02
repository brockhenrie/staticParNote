import { FormGroup } from "@angular/forms";

export class AccordMenu {
  header = {
    title: '',
    desc:'',
    icon: '',
  }
  content!: {
    type:string,
    form?: FormGroup,
    formConfig: formFieldConfig[]
  }

}

export interface formFieldConfig{
  name:string;
  qType:string;
  placeholder:string;
}
