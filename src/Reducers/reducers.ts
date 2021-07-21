import {PING, PONG} from '../Actions/actions'
import {INCREMENT, DECREMENT, MULTIPLY, INTERVAL, INTERVAL_THROTTLE} from '../Actions/actions'
import {ICounterAction, ISimpleAction} from '../types'
    
const initialIntervalState = {
    count: 0,
    throttled: 0
}
export function intervalReducer(state = initialIntervalState, action: ISimpleAction) {
    switch (action.type) {
        case INTERVAL_THROTTLE:
            console.log("intervalReducer INTERVAL_THROTTLE", state);
            return { ...state, throttled: state.throttled + 1 };
        case INTERVAL:
            console.log("intervalReducer INTERVAL", state);
            return { ...state, count: state.count + 1 };
        default:
            return state;
        }
}

const initialCounterState = {
  counter: 0
};
export function counterReducer(state = initialCounterState, action: ICounterAction) {
  switch (action.type) {
    case INCREMENT:
      console.log("counterReducer INCREMENT");
      return { counter: state.counter + 1 };
    case DECREMENT:
      console.log("counterReducer DECREMENT");
      return { counter: state.counter - 1 };
    case MULTIPLY:
      console.log("counterReducer MULTIPLY");
      return { counter: state.counter * action.payload.value };
    default:
      return state;
  }
}

const initialPingState = { 
    isPinging: false 
}
export const pingReducer = (state = initialPingState, action: ISimpleAction) => {
  console.log(action);
  switch (action.type) {
    case PING:
      console.log("pingReducer PING");
      return { isPinging: true };
    case PONG:
      console.log("pingReducer PONG");
      return { isPinging: false };
    default:
      return state;
  }
};
