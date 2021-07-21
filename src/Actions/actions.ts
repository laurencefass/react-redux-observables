// actions.ts to scale this file split this file into feature actions and import/export 
export const PING = "PING";
export const PONG = "PONG";
export const INCREMENT = "INCREMENT";
export const INCREMENT_THROTTLE = INCREMENT + "_THROTTLE" 
export const DECREMENT = "DECREMENT";
export const DECREMENT_DEBOUNCE = DECREMENT + "_DEBOUNCE"
export const MULTIPLY = "MULTIPLY"

export const multiplyAction = (value: number) => {
  return { 
    type: MULTIPLY,
    payload: {
      value: value
    } 
  }
}

export const pongAction = () => {
  return { type: PONG }
}

export const pingAction = () => {
  return { type: PING }
}

export const decrementDebounceAction = () => {
  return { type:DECREMENT_DEBOUNCE }
}

export const incrementThrottleAction = () => {
  return { type:INCREMENT_THROTTLE }
}

export const incrementAction = () => {
  return { type: INCREMENT }
}

export const decrementAction = () => {
  return { type: DECREMENT }
}
