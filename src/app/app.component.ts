import { Component,Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { PracComponent } from './prac/prac.component';
//import {Router} from '@angular/router';
@Component({
  selector: 'prac',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(PracComponent, { injector: this.injector });
    customElements.define('prac', el);
  }
}
