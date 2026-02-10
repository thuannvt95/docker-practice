import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, loadCounter, setCounter } from "./counter.action";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";

@Injectable()
export class CounterEffects {
    actions$ = inject(Actions);
    store = inject(Store);

    loadCounter$ = createEffect(
        () => this.actions$.pipe(
             ofType(loadCounter),
             switchMap(() => {
                console.log('setCounter')
                return of(setCounter({value: 3}))
             })
        )
    );

    saveCount = createEffect(
        () => this.actions$.pipe(
            ofType(increment, decrement),
            withLatestFrom(this.store.select(selectCount)),
            tap(([action, counter]) => {
                localStorage.setItem('count', action.value.toString());
            })
        ),
        {dispatch: false}
    );

    constructor() {

    }
}