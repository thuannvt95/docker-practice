import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { doubleCount, selectCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  imports: [AsyncPipe],
  standalone: true,
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  store = inject(Store);
  count$: Observable<number>;
  doubleCount$: Observable<number>;

  constructor() {
    this.count$ = this.store.select(selectCount);
    this.doubleCount$ = this.store.select(doubleCount);
  }

  ngOnInit(): void {
    // this.counterServiceSub = this.counterService.counterChanged.subscribe(
    //   (newVal) => (this.counter = newVal)
    // );
  }

  ngOnDestroy(): void {
    // if (this.counterServiceSub) {
    //   this.counterServiceSub.unsubscribe();
    // }
  }
}
