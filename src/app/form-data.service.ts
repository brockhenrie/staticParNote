import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AccordMenu } from './shared/accord-menu/accord-menu.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

 private persons = [
    'FNI',
    'NI',
    'CLMNT',
    'OIC',
    'Att',
  ];
 private purposes = [
    'Personal',
    'Buisness',
    'Rideshare',
  ];

 private payees = [
    'SS',
    'Digital Pay',
    'NPS',
    'Insured/Clmnt'
  ];



  constructor(
    
    private clipboardApi: ClipboardService,
    private _snackBar: MatSnackBar) { }

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



}
