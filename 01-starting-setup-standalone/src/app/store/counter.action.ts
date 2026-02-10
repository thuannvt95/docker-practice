import { createAction, props } from "@ngrx/store";

export const setCounter = createAction(
    'setCounter',
     props<{value: number}>()
)

export const loadCounter = createAction(
    'loadCounter',
)

export const increment = createAction(
    'increment',
    props<{value: number}>()
);

export const decrement = createAction(
    'decrement',
    props<{value: number}>()
);