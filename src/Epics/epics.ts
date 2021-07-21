import { Observable, Observer } from 'rxjs'
import { 
  debounceTime, 
  throttleTime, 
  mapTo, 
  delay, 
  tap 
} from 'rxjs/operators';
import { ofType } from "redux-observable";
import { 
  INCREMENT,
  INCREMENT_THROTTLE, 
  DECREMENT_DEBOUNCE,
  PING,
  INTERVAL,
  INTERVAL_THROTTLE,
  pongAction, 
  incrementAction, 
  decrementAction,
  throttleIntervalAction
} from "../Actions/actions"

const THROTTLE_TIME = 2000;
export const intervalEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType(INTERVAL),
    tap(val => console.log(`intervalEpic tap: ${JSON.stringify(val)}`)),
    throttleTime(THROTTLE_TIME),
    mapTo(throttleIntervalAction())
  );


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
