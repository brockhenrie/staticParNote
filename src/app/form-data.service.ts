import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

private activeRoute = 'Note Buddy';


private notePad = '';

private languageLine = this.fb.group({
  clientID: 799841,
  departmentCode: 124753,
  personalExtension: null,

});

private acronyms = [
{name:'FTMCOV ', desc:'Failure to Maintain Control of Vehicle'},
{name:'FTYROW', desc:'Failure to yield right of way'},
{name:"ILOWB" , desc:'Improper look out while backing'},
{name:'ILO',desc: 'Improper look out'},
{name:'ILU', desc: 'Improper Lane Usage'},
{name:'HWP' , desc:'Hit while parked'},
{name:'H&R',desc: 'Hit and Run'},
{name:'FTSACD' ,desc: 'Failure to Stop in Assured Clear Distance'},
{name:'FTC',desc: 'Following Too Close'},
{name:'FTOTCD',desc:'Failure to Obey Traffic Control Device'},
{name:'LM', desc: 'Left Message'},
{name:'LMOM', desc: 'Left Message on Machine'},
{name:'LMOVM',desc:  'Left Message on Voicemail'},
];

private parForm = this.fb.group({
  spokeTo: 'FNI',
  purposeOfTrip: 'Personal',
  coveragesExplained: true,
  cprs: false,
  cprsReplacement: false,
  tow: false,
  towId: '1234',
  mitigation: false,
  ocs: true,
  terms: true,
  odm: true,
  adsp: true,
  supp: false,
  dtp: 'SS',
  cic: false,
  pr: false,
  injuries: false,
  sub: false,
  additionalNotes: ''
});

private qfcForm = this.fb.group({
  name: '',
  fol: '',
  purposeOfTrip: 'Personal',
  passengers: '',
  injuries: false,
  compNeg: true,
  liability: true,
  sub: false,
  coverages: true,
  adsp: true,
  storage: false,
  storageCall: false,
  clmntInspection: true,
  eft: false,
  rental: false,
  jr: false,
  ocs:true,
  additionalNotes:''

});

 private persons = [
    {name:'FNI', id:'FNI'},
    {name: 'NI',id:'NI'},
    {name:'CLMNT', id: 'CLMNT'},
    {name:'OIC',id:'OIC'},
    {name: 'Att',id: 'Att'}
  ];
 private purposes = [
    {name: 'Personal',id: 'Personal'},
    {name:'Buisness', id: "Buisness"},
    {name:'Rideshare', id:'Rideshare'},
  ];

 private payees = [
    {name:'SS', id:'SS'},
    {name:'NPS', id:'NPS'},
    {name:'Insured/Clmnt', id:'Insured/Clmnt'}
  ];



  constructor(
    private clipboardApi: ClipboardService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder) { }

    getPayees(){
      return [...this.payees]
    }

    getPurposes(){
      return [...this.purposes]
    }

    getPersons(){
      return [...this.persons]
    }

    onCopy(form: string){
     this.clipboardApi.copyFromContent(form);
     this.openSnackBar('Copied', 'ok');
    }

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 1000,
      });
    };

    onKeepParForm(form: FormGroup){
      this.parForm= form;
    }
    getParForm(){
      return this.parForm;
    }

    getQfcForm(){
      return this.qfcForm;
    }

    onKeepQfcForm(form: FormGroup){
      this.qfcForm = form;
    }

    getNotePad(){
      return this.notePad;
    }

    onKeepNotePad(text: string){
      this.notePad = text;
    }

    setActiveRoute(name: string){
      this.activeRoute = name;
    }
    getActiveRoute(){
      return this.activeRoute;
    }

    getLanguageLine(){
      return this.languageLine

    }
    onKeepLanguageLine(form: FormGroup){
      this.languageLine = form;

    }

    getAcronyms(){
      return [...this.acronyms];
    }

}
