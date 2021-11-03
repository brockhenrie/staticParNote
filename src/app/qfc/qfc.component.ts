import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-qfc',
  templateUrl: './qfc.component.html',
  styleUrls: ['./qfc.component.scss']
})
export class QfcComponent implements OnInit , OnDestroy{


  purposes: any[]=[];

  payees:any[] = [];

  qfcForm!: FormGroup;






  constructor(
    private fd:FormDataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.payees = this.fd.getPayees();
    this.purposes = this.fd.getPurposes();
    this.qfcForm = this.fd.getQfcForm();

  };

  ngOnDestroy(){
    this.fd.onKeepQfcForm(this.qfcForm);

  }

  onSubmit(){
    var qfcFormCopy = `
    Quality First Contact
      QFC (Name): ${this.qfcForm.value.name || 'no'}
      Customer Described FOL (Speed/Time/Distance/Lookout): ${this.qfcForm.value.fol  || 'no'}
      Purpose of Trip: ${this.qfcForm.value.purposeOfTrip || 'no'}
      Passengers: ${this.qfcForm.value.passengers || 'no'}
      Injuries: ${this.qfcForm.value.injuries || 'no'}
      Comparative/Contributory Negligence Considered: ${this.qfcForm.value.compNeg  || 'no'}
      Liability Explained: ${this.qfcForm.value.liability  || 'no'}
      Sub Identified/OIC Updated: ${this.qfcForm.value.sub || 'no'}
      Coverages Explained: ${this.qfcForm.value.coverages || 'no'}
      ADSP Explained: ${this.qfcForm.value.adsp || 'no'}
      Storage Accruing (If yes, indicate if 3-way call completed): ${this.qfcForm.value.storage || 'no'} , call:${this.qfcForm.value.storageCall || 'no'}
      Explained Claimant Inspection Options: ${this.qfcForm.value.clmntInspections || 'no'}
      Offered EFT: ${this.qfcForm.value.eft || 'no'}
      Rental Explained: ${this.qfcForm.value.rental || 'no'}
      Jurisdictional Requirements: ${this.qfcForm.value.jr || 'no'}
      Explained Online Claim Services/Self Services: ${this.qfcForm.value.ocs || 'no'}
      Additional Notes: ${this.qfcForm.value.additionalNotes || 'no'}

    `;
   this.fd.onCopy(qfcFormCopy);
  }

  onReset(){
    this.qfcForm.reset();
    this.fd.openSnackBar('Form Reset', 'ok');
  }
}
