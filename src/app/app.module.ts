import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TODOAPPComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TODOAPPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TODOAPPComponent]
})
export class AppModule { }
