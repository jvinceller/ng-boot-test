import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  id: string | null;
  constructor(private readonly router: Router, private readonly activated: ActivatedRoute) {
    this.id = this.activated.snapshot.paramMap.get('id');
  }

  toFirst() {
    this.router.navigate(['']);
  }
}
