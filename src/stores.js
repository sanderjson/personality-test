import { writable } from "svelte/store";

export const testIsActive = writable(false);
export const currentTestQuestion = writable(0);
export const testIsComplete = writable(false);
export const testScore = writable({ A: 0, B: 0, C: 0, D: 0 });
// export const testScore = writable({ A: 54, B: 35, C: 16, D: 9 });

