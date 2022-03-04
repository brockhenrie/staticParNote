import { MaterialsModule } from './shared/materials/materials.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NotePadComponent } from './note-pad/note-pad.component';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { NavDrawerComponent } from './shell/nav-drawer/nav-drawer.component';
import { AccordMenuComponent } from './shared/accord-menu/accord-menu.component';
import { FormComponent } from './shared/accord-menu/form/form.component';
import { AccordContentDisplayComponent } from './shared/accord-menu/accord-content-display/accord-content-display.component';
import { ControlComponent } from './control/control.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';



@NgModule({
  declarations: [
    AppComponent,
    NotePadComponent,
    HomeComponent,
    ShellComponent,
    HeaderComponent,
    NavDrawerComponent,
    AccordMenuComponent,
    FormComponent,
    AccordContentDisplayComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ClipboardModule,
    ReactiveFormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
