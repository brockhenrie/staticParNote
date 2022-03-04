import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.scss']
})
export class NotePadComponent implements OnInit {
  textOnly = '';
  title = 'Notepad';

  constructor(private ts: Title) { }

  ngOnInit(): void {
    this.ts.setTitle(this.title)
  }

}
