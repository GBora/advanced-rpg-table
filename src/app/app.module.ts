import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AdvancedTableComponent } from './advanced-table/advanced-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AdvancedTableComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(AdvancedTableComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('advanced-table', el);
  }
}
