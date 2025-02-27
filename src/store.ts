import { createEvent, createStore } from "effector";

export const incremented = createEvent();
export const decremented = createEvent();
export const resetCounter = createEvent();

export const $counter = createStore(0)
    .on(incremented, (counter) => counter + 1)
    .on(decremented, (counter) => counter - 1)
    .reset(resetCounter);

$counter.watch((counter) => {
    console.log(counter)
})