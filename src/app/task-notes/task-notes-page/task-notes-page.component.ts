import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { count } from 'rxjs/operators';
import { LocalstorageService } from '../../localstorage.service';
import { TaskNotesService } from '../task-notes.service';
import { TaskNote } from '../taskNote.model';

@Component({
  selector: 'app-task-notes-page',
  templateUrl: './task-notes-page.component.html',
  styleUrls: ['./task-notes-page.component.scss']
})
export class TaskNotesPageComponent implements OnInit {

title = 'Task Notes';

  taskNotes = this.ts.getTaskNotes();
  totalTasks$ = this.ls.taskTotal$;
  constructor(private ts: TaskNotesService,
    private ls:LocalstorageService,
    private tsk: Title) { }

  ngOnInit(): void {
    this.tsk.setTitle(this.title)
  }

  onCopyTotal(amount:number){
      this.ts.onCopy(`Total Tasks: ${amount}`)
  }

  onResetTotal(){
    this.ls.saveTaskTotal(0);
  }

  taskCount(count:string){

    if(count === '+'){
      this.ls.incrementTaskCount();
    }
    if(count === '-' ){
      this.ls.decrementTaskCount();
    }else{
      return
    }
}
}
