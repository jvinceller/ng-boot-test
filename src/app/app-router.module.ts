import {NgModule, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";

export const routes = [{
  path: '', component: FirstComponent
}, {
  path: ':id', component: SecondComponent
}];

@NgModule({
  declarations: [
    FirstComponent,SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRouterModule implements OnDestroy {
  constructor() {
    console.log('M AppRouterModule init');
  }
  ngOnDestroy() {
    console.log('M AppRouterModule destroy');
  }
}
