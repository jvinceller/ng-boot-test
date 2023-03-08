import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRouterModule} from "./app-router.module";
import {createCustomElement} from "@angular/elements";
import {SomeService} from "./some.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [SomeService],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {
    console.log('M AppModule init');
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    console.log('M AppModule ngDoBootstrap');
    const elem = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('custom-root', elem);
  }
}
