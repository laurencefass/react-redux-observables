import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {Counter, Pinger} from "./Components";
import {counterReducer} from "./Reducers/counterReducer";
import {pingReducer} from "./Reducers/pingReducer";
// import {IReducers} from './types';

import { createEpicMiddleware, combineEpics } from "redux-observable";
import { pingEpic, incThrottleEpic, decDebounceEpic } from './Epics/epics'

const reducers = combineReducers({
  root: counterReducer,
  ping: pingReducer,
})

const epics = combineEpics(
  pingEpic, 
  incThrottleEpic,
  decDebounceEpic
)

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <h1>React + Redux + Observables demo</h1>
    <Counter />
    <Pinger />
  </Provider>,
  rootElement
);
