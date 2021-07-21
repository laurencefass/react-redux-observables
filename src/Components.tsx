// import React from "react";
import React, {useState, useEffect } from "react";
import { interval } from 'rxjs';
import { pingAction, intervalAction, incrementAction, incrementThrottleAction, throttleIntervalAction, decrementDebounceAction } from './Actions/actions'
import { useDispatch, useSelector } from "react-redux";
import { IReducers } from './types'


export function ObservableInterval() {
  const count = useSelector((state: IReducers) => state.interval.count);
  const throttled = useSelector((state: IReducers) => state.interval.throttled);
  const dispatch = useDispatch();
  let [source] = useState(interval(1000));
  let [subscriber, setSubscriber] = useState();

  useEffect(()=>{
    if (source) {
      console.log("ObservableInterval.useEffect[]");
      setSubscriber(source.subscribe(val => {
        // Epic observer will map to throttleIntervalAction to update separate state
        dispatch(intervalAction());
      }));  
      console.log(subscriber);
    }
  }, [source]);

  const onClick = () => dispatch(intervalAction());

  return (<>
    <h2>RXJS subscription stream</h2>
    <p>State updates from an RXJS subscriber modified by Epic</p>
    <p>1s interval: {count}</p>
    <p>3s interval (1s action throttled by Epic): {throttled}</p>
    {/* <button onClick={onClick}>increment interval</button> */}
  </>)
}

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
