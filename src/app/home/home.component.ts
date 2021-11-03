import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  languageLine!: FormGroup;
  acronyms!: any[];

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(
    private router: Router,
    private fd: FormDataService) { }

  ngOnInit(): void {
    this.acronyms = this.fd.getAcronyms();
    this.languageLine = this.fd.getLanguageLine();


  }

  ngOnDestroy(){
    this.fd.onKeepLanguageLine(this.languageLine);

  }


  onQuickNavigate(name: string){
   this.router.navigate([name]);
  }

}
