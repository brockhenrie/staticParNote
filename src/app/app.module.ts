import { MaterialsModule } from './shared/materials/materials.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ParTemplateComponent } from './par-template/par-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NotePadComponent } from './note-pad/note-pad.component';
import { HomeComponent } from './home/home.component';
import { WordTractsComponent } from './word-tracts/word-tracts.component';
import { QfcComponent } from './qfc/qfc.component';





@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ParTemplateComponent,
    NotePadComponent,
    HomeComponent,
    WordTractsComponent,
    QfcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
