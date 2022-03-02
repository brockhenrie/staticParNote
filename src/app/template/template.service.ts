import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Template, TemplateQuestionConfig } from './template.model';

@Injectable()
export class TemplateService {
  private templates: Template[] = [
    par,
    qfc
  ]

  private activeForm = new FormGroup({});

  constructor() {}

  getTemplates():Template[]{
    return [...this.templates]
  }
  setActiveForm(form:FormGroup){
    this.activeForm = form;
  }
  updateActiveForm(value:any, formControlName:string){
    if(!this.activeForm){
      throw new Error('No active template set')
    }
      this.activeForm.patchValue({[formControlName]: value});
  }
  resetForm(){
    this.activeForm.reset();
  }
  getActiveForm(){
    return this.activeForm;
  }
  copyActiveForm(){

  }

}
const parQuestionConfig: TemplateQuestionConfig[] = [
  {
    label: 'Spoke to',
    type: 'radio',
    formControlName: 'spokeTo',
    options:[
      'FNI',
      'NI',
      'CLMT',
      'OIC',
      "Att"
    ]
  },
  {
    label: 'Purpose of Trip',
    type: 'radio',
    formControlName: 'purposeOfTrip',
    options:[
      'Personal',
      'Buisness',
      'Rideshare',
      'Parked & Occ',
      "Parked & Unocc"
    ]
  },
  {
    label: 'Coverages Explained',
    type: 'checkbox',
    formControlName: 'coveragesExplained',
  },
  {
    label: 'Cprs',
    type: 'checkbox',
    formControlName: 'cprs',
  },
  {
    label: 'Cprs Replacement Needed',
    type: 'checkbox',
    formControlName: 'cprsReplacement',
  },
  {
    label: 'Tow',
    type: 'checkbox',
    formControlName: 'tow',
  },
  {
    label: 'Tow ID',
    type: 'input',
    formControlName: 'towId',
  },
  {
    label: 'Explained Mitigation',
    type: 'checkbox',
    formControlName: 'mitigation',
  },
  {
    label: 'Explained OCS/CSS',
    type: 'checkbox',
    formControlName: 'ocs',
  },
  {
    label: 'Explained Terms&Conditions',
    type: 'checkbox',
    formControlName: 'termsC',
  },
  {
    label: 'Explained ODM',
    type: 'checkbox',
    formControlName: 'odm',
  },
  {
    label: 'Explained ADSP/RWT',
    type: 'checkbox',
    formControlName: 'adsp',
  },
  {
    label: 'Explained Digital Pay',
    type: 'checkbox',
    formControlName: 'digitalPay',
  },
  {
    label: 'Direction to Pay',
    type: 'radio',
    formControlName: 'dtp',
    options: [
      'SS', 'Digital Pay', 'NPS', 'INS/CLMN', 'N/A'
    ]
  },
  {
    label: 'Explained Supp/Payments',
    type: 'checkbox',
    formControlName: 'supp',
  },
  {
    label: 'Explained CIC/JR',
    type: 'checkbox',
    formControlName: 'cic',
  },
  {
    label: 'Police Report Requested',
    type: 'checkbox',
    formControlName: 'pr',
  },
  {
    label: 'Injuries Indicated',
    type: 'checkbox',
    formControlName: 'inj',
  },
  {
    label: 'Sub Potential',
    type: 'checkbox',
    formControlName: 'sub',
  },
  {
    label: 'Additional Notes',
    type: 'input',
    formControlName: 'addNotes',
  },
];
const par: Template = {
  templateName: 'PAR',
  questionConfigs: parQuestionConfig,
  form: new FormGroup({
    spokeTo: new FormControl('', [Validators.required]),
    purposeOfTrip: new FormControl('', [Validators.required]),
    coveragesExplained: new FormControl('', [Validators.required]),
    cprs: new FormControl(''),
    cprsReplacement: new FormControl(''),
    tow: new FormControl(''),
    towId: new FormControl(''),
    mitigation: new FormControl(''),
    ocs: new FormControl(''),
    termsC: new FormControl(''),
    odm: new FormControl(''),
    adsp: new FormControl('', [Validators.required]),
    digitalPay: new FormControl(''),
    dtp: new FormControl(''),
    supp: new FormControl(''),
    cic: new FormControl(''),
    pr: new FormControl(''),
    inj: new FormControl(''),
    sub: new FormControl(''),
    addNotes: new FormControl(''),
  }),
};

const qfcQuestionConfig: TemplateQuestionConfig[] = [
  {
    label: 'Spoke to',
    type: 'radio',
    formControlName: 'spokeTo',
    options:[
      'FNI',
      'NI',
      'CLMT',
      'OIC',
      "Att"
    ]
  },
  {
    label: 'Facts of Loss',
    type: 'input',
    formControlName: 'fol',
  },
  {
    label: 'Purpose of Trip',
    type: 'radio',
    formControlName: 'purposeOfTrip',
    options:[
      'Personal',
      'Buisness',
      'Rideshare',
      'Parked & Occ',
      "Parked & Unocc"
    ]
  },
  {
    label: 'Injuries Indicated',
    type: 'checkbox',
    formControlName: 'inj',
  },
  {
    label: 'Comp Neg Indicated',
    type: 'checkbox',
    formControlName: 'compNeg',
  },
  {
    label: 'Liability Explained',
    type: 'checkbox',
    formControlName: 'liab',
  },
  {
    label: 'Sub Identified/OIC Updated',
    type: 'checkbox',
    formControlName: 'sub',
  },
  {
    label: 'Coverages Explained',
    type: 'checkbox',
    formControlName: 'coveragesExplained',
  },
  {
    label: 'Explained ADSP',
    type: 'checkbox',
    formControlName: 'adsp',
  },
  {
    label: 'Storage Accruing',
    type: 'checkbox',
    formControlName: 'storageAccruing',
  },
  {
    label: 'Three Way Call Made',
    type: 'checkbox',
    formControlName: 'threeWayCall',
  },
  {
    label: 'Explained Claimant Inspection Options',
    type: 'checkbox',
    formControlName: 'clmntOptions',
  },
  {
    label: 'Explained Digital Pay',
    type: 'checkbox',
    formControlName: 'digitalPay',
  },
  {
    label: 'Explained Rental',
    type: 'checkbox',
    formControlName: 'rental',
  },
  {
    label: 'Explained JR',
    type: 'checkbox',
    formControlName: 'jr',
  },
  {
    label: 'Explained OCS/CSS',
    type: 'checkbox',
    formControlName: 'ocs',
  },
  {
    label: 'Additional Info',
    type: 'input',
    formControlName: 'addNotes',
  }
];
const qfc: Template = {
  templateName: 'QFC',
  questionConfigs: qfcQuestionConfig,
  form: new FormGroup({
    spokeTo: new FormControl('', [Validators.required]),
    fol: new FormControl('', [Validators.required]),
    purposeOfTrip: new FormControl('', [Validators.required]),
    inj: new FormControl(''),
    compNeg: new FormControl('', [Validators.required]),
    liab: new FormControl(''),
    sub: new FormControl(''),
    coveragesExplained: new FormControl('', [Validators.required]),
    adsp: new FormControl('', [Validators.required]),
    storageAccruing: new FormControl(''),
    threeWayCall: new FormControl(''),
    clmntOptions: new FormControl(''),
    digitalPay: new FormControl(''),
    odm: new FormControl(''),
    rental: new FormControl(''),
    jr: new FormControl(''),
    ocs: new FormControl(''),
    addNotes: new FormControl(''),
  }),
};

