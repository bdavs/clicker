import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux'
import { createStore } from "redux";
// import rootReducer from './reducers'
import "./index.css";
// import App from './App';
// import * as serviceWorker from "./serviceWorker";

import counter from "./reducers";
import { Provider } from "react-redux";
import Layout from "./components/Layout"

const store = createStore(counter);

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.getElementById("root")
  );

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
