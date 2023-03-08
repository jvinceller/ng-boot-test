import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {routes} from "./app-router.module";
import {SomeService} from "./some.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private readonly router: Router, public readonly someService: SomeService) {
    console.log(' -> C AppComponent init');
  }

  ngOnInit(): void {
    this.router.resetConfig(routes);
    this.router.initialNavigation();
    this.someService.myInit();
  }

  ngOnDestroy(): void {
    console.log(' -> C AppComponent destroy');
    this.someService.myDone$.next();
    //this.router.resetConfig([]);
  }
}
