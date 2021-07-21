import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  Counter, 
  Pinger, 
  ObservableInterval
} from "./Components";

import {
  counterReducer, 
  pingReducer, 
  intervalReducer
} from "./Reducers/reducers";

import { 
  createEpicMiddleware, 
  combineEpics } from "redux-observable";

import { 
  pingEpic, 
  incThrottleEpic, 
  decDebounceEpic, 
  intervalEpic,
} from './Epics/epics'

const reducers = combineReducers({
  root: counterReducer,
  ping: pingReducer,
  interval: intervalReducer,
})

const epics = combineEpics(
  pingEpic, 
  incThrottleEpic,
  decDebounceEpic,
  intervalEpic
)

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);

const TestUnit = (props:any) => {
  return (
    <div className="test-unit">
      {props.children}
    </div>
  )  
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <h1>React + Redux + Observables demo</h1>
    <TestUnit>
      <ObservableInterval />
    </TestUnit>

    <TestUnit>
      <Counter />
    </TestUnit>

    <TestUnit>
      <Pinger />
    </TestUnit>
  </Provider>,
  rootElement
);
