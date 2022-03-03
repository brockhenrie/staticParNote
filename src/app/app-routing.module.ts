import { ControlComponent } from './control/control.component';
import { WordTractsComponent } from './word-tracts/word-tracts.component';
import { HomeComponent } from './home/home.component';
import { NotePadComponent } from './note-pad/note-pad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path: '', redirectTo:'home', pathMatch:'full'},
{path: 'home', component: HomeComponent},
{
  path:'template',
  loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
  {
    path:'taskNotes',
    loadChildren: () => import('./task-notes/task-notes.module').then(m => m.TaskNotesModule) },

{path: 'notepad', component: NotePadComponent},
{path: 'claimNotes', component: WordTractsComponent},
{path:'control', component: ControlComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

