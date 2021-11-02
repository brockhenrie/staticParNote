import { WordTractsComponent } from './word-tracts/word-tracts.component';
import { HomeComponent } from './home/home.component';
import { NotePadComponent } from './note-pad/note-pad.component';
import { ParTemplateComponent } from './par-template/par-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QfcComponent } from './qfc/qfc.component';

const routes: Routes = [
{path: '', component: ParTemplateComponent},
{path: 'PAR', component: ParTemplateComponent},
{path: 'QFC', component:QfcComponent},
{path: 'Home', component: HomeComponent},
{path: 'Note Pad Only', component: NotePadComponent},
{path: 'Word Tracts', component: WordTractsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
