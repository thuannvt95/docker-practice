import { Component, inject } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.action';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  store = inject(Store);

  constructor() {}

  increment() {
    this.store.dispatch(increment({value: 2}));
  }

  decrement() {
    this.store.dispatch(decrement({value: 2}));
  }
}
