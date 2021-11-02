import { FormDataService } from './../form-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-par-template',
  templateUrl: './par-template.component.html',
  styleUrls: ['./par-template.component.scss']
})
export class ParTemplateComponent implements OnInit {
  persons =[
    ''];
  purposes = [
    ''
  ];
  payees = [
    ''
  ];


  parForm = this.fb.group({
    name: '',
    purposeOfTrip: this.fb.array([

    ]),
    coverages: true,
    cprs: false,
    cprsReplacement: false,
    tow: false,
    towID: '',
    mitigation: false,
    ocs: true,
    termsConditions: true,
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




  constructor(
    private fd: FormDataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.purposes = this.fd.getPurposes();
    for (let index = 0; index < this.purposes.length; index++) {
      this.addPurpose(this.purposes[index]);
    };

  };


  onSubmit(){
    var copyForm = `
    P/A:
    Spoke to: ${this.parForm.value.spokeTo || 'no'}
    Purpose of trip: ${this.parForm.value.purposeOfTrip || 'no'}
    Coverages explained: ${this.parForm.value.coveragesExplained || 'no'}
    Cprs: ${this.parForm.value.cprs || 'no'}
    Cprs Replacement Needed: ${this.parForm.value.cprsReplacement || 'no'}
    Tow: ${this.parForm.value.tow|| 'no'}
    Tow ID: ${this.parForm.value.towID || 'no'}
    Explained Mitigation: ${this.parForm.value.mitigation || 'no'}
    Explained OCS/CSS: ${this.parForm.value.ocs|| 'no'}
    Explained Terms&Conditions: ${this.parForm.value.terms|| 'no'}
    Explained ODM: ${this.parForm.value.odm|| 'no'}
    Explained ADSP/RWT: ${this.parForm.value.adsp|| 'no'}
    Explained Supp/Payments: ${this.parForm.value.supp|| 'no'}
    Direction to Pay: ${this.parForm.value.dtp|| 'no'}
    Explained CIC/JR: ${this.parForm.value.cic|| 'no'}
    PR Requested: ${this.parForm.value.pr|| 'no'}
    Injuries: ${this.parForm.value.injuries|| 'no'}
    Sub Potential: ${this.parForm.value.sub|| 'no'}
    Additional Notes: ${this.parForm.value.additionalNotes|| 'no'}

    R:
    `;
   this.fd.onCopy(copyForm);
  }

  get purposeOfTrip() {
    return this.parForm.controls['purposeOfTrip'] as FormArray;
  };

  addPurpose(name:string){
    const purpose = this.fb.group({
      name: name,
    });
    this.purposeOfTrip.push(purpose);
  }



  onReset(){
    this.parForm.reset();
    this.fd.openSnackBar('Form Reset', 'ok');
  }
}
