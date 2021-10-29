import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-par-template',
  templateUrl: './par-template.component.html',
  styleUrls: ['./par-template.component.scss']
})
export class ParTemplateComponent implements OnInit {
  persons = [
    'FNI',
    'NI',
    'CLMNT',
    'OIC',
    'Att',
  ];
  purposes = [
    'Personal',
    'Buisness',
    'Rideshare',
  ];

  payees = [
    'SS',
    'NPS',
    'Insured/Clmnt'
  ];

  constructor(private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var copyForm = `
    Spoke to: ${form.value.spokeTo || 'no'}
    Purpose of trip: ${form.value.purposeOfTrip || 'no'}
    Coverages explained: ${form.value.coveragesExplained || 'no'}
    Cprs: ${form.value.cprs || 'no'}
    Cprs Replacement Needed: ${form.value.cprsReplacement || 'no'}
    Tow: ${form.value.tow|| 'no'}
    Tow ID: ${form.value.towID || 'no'}
    Explained Mitigation: ${form.value.mitigation || 'no'}
    Explained OCS/CSS: ${form.value.ocs|| 'no'}
    Explained Terms&Conditions: ${form.value.terms|| 'no'}
    Explained ODM: ${form.value.odm|| 'no'}
    Explained ADSP/RWT: ${form.value.adsp|| 'no'}
    Explained Supp/Payments: ${form.value.supp|| 'no'}
    Direction to Pay: ${form.value.dtp|| 'no'}
    Explained CIC/JR: ${form.value.cic|| 'no'}
    PR Requested: ${form.value.pr|| 'no'}
    Injuries: ${form.value.injuries|| 'no'}
    Sub Potential: ${form.value.sub|| 'no'}
    Additional Notes: ${form.value.additionalNotes|| 'no'}

    R:
    `
    // var copiedForm = JSON.stringify(form.value);
    // console.log(copiedForm);
   this.clipboardApi.copyFromContent(copyForm);
  }

  onReset(form: NgForm){
    form.reset();
  }
}
