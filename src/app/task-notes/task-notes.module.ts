import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskNotesService } from './task-notes.service';
import { TaskNotesPageComponent } from './task-notes-page/task-notes-page.component';
import { MaterialsModule } from '../shared/materials/materials.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskNoteCardComponent } from './task-note-card/task-note-card.component';


const routes:Routes=[
  {path: '', component:TaskNotesPageComponent},
]
@NgModule({
  declarations: [
    TaskNotesPageComponent,
    TaskNoteCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialsModule
  ],
  providers: [TaskNotesService]
})
export class TaskNotesModule { }
