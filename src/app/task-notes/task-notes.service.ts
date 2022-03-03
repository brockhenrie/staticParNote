import { TaskNote, taskNotes } from './taskNote.model';
import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TaskNotesService {
  taskNotes: TaskNote[] = taskNotes;

  constructor(
    private clipboardApi: ClipboardService,
    private _snackBar: MatSnackBar
  ) {}
  getTaskNotes() {
    return taskNotes;
  }

  onCopy(form: string) {
    this.clipboardApi.copyFromContent(form);
    this.openSnackBar('Copied', 'ok');
  }

 private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 1000,
    });
  }
}
