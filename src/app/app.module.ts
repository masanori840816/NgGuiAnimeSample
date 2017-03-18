import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { GuiAnimeSample1Component } from './gui-anime-sample-1/gui-anime-sample-1.component';
import { GuiAnimeSample2Component } from './gui-anime-sample-2/gui-anime-sample-2.component';

@NgModule({
  declarations: [
    AppComponent,
    GuiAnimeSample1Component,
    GuiAnimeSample2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
