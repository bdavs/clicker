import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from "redux";
// import rootReducer from './reducers'
import "./index.css";

import counter from "./reducers";
import Layout from "./components/Layout"
import Notifications from "./components/notifications/Notifications"

const store = createStore(counter);

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Layout />
      <Notifications/>
    </Provider>,
    document.getElementById("root")
  );

render();
store.subscribe(render);

