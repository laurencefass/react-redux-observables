// import React from "react";
import React from "react";
import { pingAction, incrementThrottleAction, decrementDebounceAction } from './Actions/actions'
import { useDispatch, useSelector } from "react-redux";

export function Pinger() {
  const dispatch = useDispatch();

  const isPinging = useSelector((state) => state.ping.isPinging);
  const handlePing = () => dispatch(pingAction());

  return (<>
    <h1>Pinger</h1>
    <p>Epic intercepts ping converts to pong</p>
    <p>is pinging: {isPinging.toString()}</p>
    <button onClick={handlePing}>Start PING</button>
  </>)
}

export function Counter() {
  const counter = useSelector((state) => state.root.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementThrottleAction());
  const handleDecrement = () => dispatch(decrementDebounceAction());

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
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
