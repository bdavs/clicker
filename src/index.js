import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux'
import { createStore } from "redux";
// import rootReducer from './reducers'
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";

import Counter from "./components/Counter";
import counter from "./reducers";
import { Provider } from "react-redux";
import Scrolly from "./Scrolly";

const store = createStore(counter);

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <div class="grid-container">
        <div class="grid-item">
          <Counter />
        </div>
        <div class="grid-item">
          <div id="scrolly" className="scrolly">
            <Scrolly />
          </div>
        </div>
      </div>
    </Provider>,
    document.getElementById("root")
  );

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
