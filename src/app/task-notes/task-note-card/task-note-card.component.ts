import { TaskNotesService } from './../task-notes.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { count } from 'rxjs/operators';
import { TaskNote } from '../taskNote.model';

@Component({
  selector: 'app-task-note-card',
  templateUrl: './task-note-card.component.html',
  styleUrls: ['./task-note-card.component.scss']
})
export class TaskNoteCardComponent implements OnInit {

  @Input()
  note: TaskNote={
    title: '',
    p: '',
    r: ''

  };
  @Output()
  taskCount = new EventEmitter<string>();
  constructor(private ts: TaskNotesService) { }

  ngOnInit(): void {
    if(!this.note.taskCount){
      this.note.taskCount = 0
    }
    if(!this.note.messCount){
      this.note.messCount = 0
    }
  }
  onCopyPar(){
      this.ts.onCopy(`${this.note.p} \n${this.note.r}`)
  }
  onCopySubject(){
    this.ts.onCopy(`Claim Note`)
}

  taskIncrement(){
    if(!this.note.taskCount){
      this.note.taskCount = 0
    }
    if(this.note.cr === true){
      this.incMessCount();
    }

    this.note.taskCount++;
    this.taskCount.emit('+');
  }
  taskDecrement(){
    if(!this.note.taskCount || this.note.taskCount <= 0){
      this.note.taskCount = 0;
      return
    }
    if(this.note.cr === true){
     this.decrementMessCount();
    }
    this.note.taskCount--;
    this.taskCount.emit('-');
}

private decrementMessCount(){
    if(!this.note.messCount || this.note.messCount <= 0) {this.note.messCount=0; return}
    this.note.messCount--;
}

private incMessCount(){
  if(!this.note.messCount) this.note.messCount=0;
    this.note.messCount++;
}

}
