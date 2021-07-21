import { Observable } from 'rxjs'
import { debounceTime, throttleTime, mapTo, delay, tap } from 'rxjs/operators';
import { ofType } from "redux-observable";
import { 
  INCREMENT_THROTTLE, 
  DECREMENT_DEBOUNCE,
  PING,
  pongAction, incrementAction, decrementAction } from "../Actions/actions"

export const pingEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType(PING),
    tap(val => console.log(`pingEpic tap: ${JSON.stringify(val)}`)),
    delay(1000),
    mapTo(pongAction())
  );

export const incThrottleEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType(INCREMENT_THROTTLE),
    tap(val => console.log(`incThrottleEpic tap: ${JSON.stringify(val)}`)),
    throttleTime(1000),
    mapTo(incrementAction())
  );

export const decDebounceEpic = (action$:Observable<any>) =>
  action$.pipe(
    ofType(DECREMENT_DEBOUNCE),
    tap(val => console.log(`decDebounceEpic tap: ${JSON.stringify(val)}`)),
    debounceTime(1000),
    mapTo(decrementAction())
  );
