import { TaskNote, taskNotes } from './taskNote.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskNotesService {

  taskNotes:TaskNote[] = taskNotes;

  constructor() { }
  getTaskNotes(){
return taskNotes;
  }
}


