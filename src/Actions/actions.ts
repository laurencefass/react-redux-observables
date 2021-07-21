// actions.ts to scale this file split this file into feature actions and import/export 
export const PING = "PING";
export const PONG = "PONG";
export const INCREMENT = "INCREMENT";
export const INCREMENT_THROTTLE = INCREMENT + "_THROTTLE" 
export const DECREMENT = "DECREMENT";
export const DECREMENT_DEBOUNCE = DECREMENT + "_DEBOUNCE"
export const MULTIPLY = "MULTIPLY"
export const INTERVAL = "INTERVAL"
export const INTERVAL_THROTTLE = INTERVAL + "_THROTTLE"

import {ISimpleAction, ICounterAction} from '../types'

export const multiplyAction = (value: number) : ICounterAction => {
  return { 
    type: MULTIPLY,
    payload: {
      value: value
    } 
  }
}

export const throttleIntervalAction = () : ISimpleAction => {
  return { type: INTERVAL_THROTTLE}
}

export const intervalAction = () : ISimpleAction => {
  return { type: INTERVAL}
}

export const pongAction = () : ISimpleAction => {
  return { type: PONG }
}

export const pingAction = () : ISimpleAction => {
  return { type: PING }
}

export const decrementDebounceAction = () : ISimpleAction => {
  return { type:DECREMENT_DEBOUNCE }
}

export const incrementThrottleAction = () : ISimpleAction => {
  return { type:INCREMENT_THROTTLE }
}

export const incrementAction = () : ISimpleAction => {
  return { type: INCREMENT }
}

export const decrementAction = () : ISimpleAction => {
  return { type: DECREMENT }
}
