import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.scss']
})
export class NotePadComponent implements OnInit , OnDestroy{
  textOnly = '';

  constructor(private fd: FormDataService) { }

  ngOnInit(): void {
    this.textOnly = this.fd.getNotePad();
  }

  ngOnDestroy(){
    this.fd.onKeepNotePad(this.textOnly);
  }

}
