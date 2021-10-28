import { MaterialsModule } from './shared/materials/materials.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ParTemplateComponent } from './par-template/par-template.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ParTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
