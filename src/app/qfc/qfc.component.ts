import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-qfc',
  templateUrl: './qfc.component.html',
  styleUrls: ['./qfc.component.scss']
})
export class QfcComponent implements OnInit {


  purposes: string[]=[];

  payees: string[] = [];






  constructor(
    private fd:FormDataService) { }

  ngOnInit(): void {
    this.payees = this.fd.getPayees();
    this.purposes = this.fd.getPurposes();
  }

  onSubmit(form: NgForm){
    var qfcForm = `
    Quality First Contact
      QFC (Name): ${form.value.name || 'no'}
      Customer Described FOL (Speed/Time/Distance/Lookout): ${form.value.fol  || 'no'}
      Purpose of Trip: ${form.value.purposeOfTrip || 'no'}
      Passengers: ${form.value.passengers || 'no'}
      Injuries: ${form.value.injuries || 'no'}
      Comparative/Contributory Negligence Considered: ${form.value.compNeg  || 'no'}
      Liability Explained: ${form.value.liability  || 'no'}
      Sub Identified/OIC Updated: ${form.value.sub || 'no'}
      Coverages Explained: ${form.value.coverages || 'no'}
      ADSP Explained: ${form.value.adsp || 'no'}
      Storage Accruing (If yes, indicate if 3-way call completed): ${form.value.storage || 'no'} , call:${form.value.storageCall || 'no'}
      Explained Claimant Inspection Options: ${form.value.clmntInspections || 'no'}
      Offered EFT: ${form.value.eft || 'no'}
      Rental Explained: ${form.value.rental || 'no'}
      Jurisdictional Requirements: ${form.value.jr || 'no'}
      Explained Online Claim Services/Self Services: ${form.value.rental || 'no'}
      Additional Notes: ${form.value.additionalNotes || 'no'}

    `;
   this.fd.onCopy(qfcForm);
  }

  onReset(form: NgForm){
    form.reset();
    this.fd.openSnackBar('Form Reset', 'ok');
  }
}
