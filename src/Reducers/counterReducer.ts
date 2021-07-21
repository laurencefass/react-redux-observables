import {INCREMENT, DECREMENT, MULTIPLY} from '../Actions/actions'

const initialCounterState = {
  counter: 0
};

export function counterReducer(state = initialCounterState, action) {
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
