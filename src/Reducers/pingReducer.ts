// import { bindActionCreators } from "redux";

import {PING, PONG} from '../Actions/actions'

interface IPingAction {
  type: string
}

export const pingReducer = (state = { isPinging: false }, action: IPingAction) => {
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
