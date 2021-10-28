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
    'NI Att',
    'CLMNT Att'
  ];
  purposes = [
    'Personal',
    'Buisness',
    'Rideshare',
    'Parked'
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
    console.log(form);
    var copiedForm = JSON.stringify(form.value);
    console.log(copiedForm);
   this.clipboardApi.copyFromContent(copiedForm);
  }
}
