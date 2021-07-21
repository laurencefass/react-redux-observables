// import React from "react";
import React from "react";
import { pingAction, incrementThrottleAction, decrementDebounceAction } from './Actions/actions'
import { useDispatch, useSelector } from "react-redux";
import { IReducers } from './types'

export function Pinger() {
  const dispatch = useDispatch();
  const isPinging = useSelector((state: IReducers) => state.ping.isPinging);
  const handlePing = () => dispatch(pingAction());

  return (<>
    <h2>Pinger</h2>
    <p>Epic intercepts ping and converts to pong to set/unset state</p>
    <p>is pinging: {isPinging.toString()}</p>
    <button onClick={handlePing}>Start PING</button>
  </>)
}

export function Counter() {
  const counter = useSelector((state: IReducers) => state.root.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementThrottleAction());
  const handleDecrement = () => dispatch(decrementDebounceAction());

  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <p>Epics intercept actions. Decrement is debounced, increment throttled</p>
      <button onClick={handleDecrement}>
        - Decrement
      </button>
      <button onClick={handleIncrement}>
        + Increment
      </button>
    </div>
  );
}
