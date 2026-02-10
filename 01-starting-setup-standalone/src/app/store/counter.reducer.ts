import { createReducer, on } from "@ngrx/store";
import { decrement, increment, setCounter } from "./counter.action";

const initialialStates = 0;
export const counterReducer = createReducer(
    initialialStates,
    on(increment, (state, action) => {
        return state + action.value;
    }),
    on(decrement, (state, action) => state - action.value),
    on(setCounter, (state, action) => {
        console.log('state', state)
        console.log('action', action)
        return action.value;
    }),
);