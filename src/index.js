import React from "react";
import ReactDOM from "react-dom";
import counterReducer from "./features/counter/counterSlice.js";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import {createStore} from "redux"
const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));

