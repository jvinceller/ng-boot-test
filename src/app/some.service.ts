import {Injectable, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SomeService implements OnDestroy {
  counter$$ = new BehaviorSubject(0);
  counter$ = this.counter$$.asObservable();
  private done$ = new Subject<void>();

  myDone$ = new Subject<void>();

  constructor(private readonly router: Router) {
    console.log('S SomeService init');
    this.router.events.pipe(takeUntil(this.done$)).subscribe((event) => console.log('     -> event:', event));
    this.myDone$.subscribe(() => this.myDestroy());
  }
  myInit() {
    console.log('S SomeService myInit');
    this.counter$$.next(this.counter$$.getValue() + 1);
  }

  myDestroy() {
    console.log('S SomeService myDestroy');
  }

  ngOnDestroy() {
    console.log('S SomeService destroy');
    this.done$.next();
    this.done$.complete();
  }
}
