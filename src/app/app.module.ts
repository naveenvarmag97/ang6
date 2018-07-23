import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { PracComponent } from './prac/prac.component';

@NgModule({
  declarations: [
    AppComponent,
    PracComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [PracComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
