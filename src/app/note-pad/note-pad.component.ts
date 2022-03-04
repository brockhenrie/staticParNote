import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.scss']
})
export class NotePadComponent implements OnInit, OnDestroy {
  textOnly = '';
  title = 'Notepad';

  constructor(private ts: Title,
    private  ls: LocalstorageService) { }

  ngOnInit(): void {
    this.ts.setTitle(this.title);
    this.textOnly = this.ls.getNotes();
  }

  ngOnDestroy(): void {
    this.ls.saveNotes(this.textOnly)
  }
}
