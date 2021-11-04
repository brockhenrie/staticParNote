import { FormDataService } from './../form-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-par-template',
  templateUrl: './par-template.component.html',
  styleUrls: ['./par-template.component.scss']
})
export class ParTemplateComponent implements OnInit, OnDestroy{
  persons!: any[];
  purposes!: any[];
  payees!: any[];

  parForm!: FormGroup;






  constructor(
    private fd: FormDataService,
    private fb: FormBuilder) {


    }

  ngOnInit(): void {


    this.purposes = this.fd.getPurposes();
    this.persons = this.fd.getPersons();
    this.payees = this.fd.getPayees();
    this.parForm = this.fd.getParForm();






    // for (let index = 0; index < this.purposes.length; index++) {
    //   this.addPurpose(this.purposes[index]);
    // };

    // for (let index = 0; index < this.persons.length; index++) {
    //   this.addSpokeTo(this.persons[index]);
    // };

    // for (let index = 0; index < this.payees.length; index++) {
    //   this.addDtp(this.payees[index]);
    // };



  };

  ngOnDestroy(){
    this.fd.onKeepParForm(this.parForm);

  }




  onSubmit(){
    var copyForm = `
    P/A:
    Spoke to: ${this.parForm.value.spokeTo || 'no'}
    Purpose of trip: ${this.parForm.value.purposeOfTrip || 'no'}
    Coverages explained: ${this.parForm.value.coveragesExplained || 'no'}
    Cprs: ${this.parForm.value.cprs || 'no'}
    Cprs Replacement Needed: ${this.parForm.value.cprsReplacement || 'no'}
    Tow: ${this.parForm.value.tow|| 'no'}
    Tow ID: ${this.parForm.value.towId || 'no'}
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
  };






  onReset(){
    this.parForm.reset();
    this.fd.openSnackBar('Form Reset', 'ok');
  }
}
