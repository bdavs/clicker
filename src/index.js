import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import configureStore from "./configureStore"
import { PersistGate } from "redux-persist/integration/react";
// import rootReducer from './reducers'
import "./index.css";

// import counter from "./reducers";
import Layout from "./components/Layout";
import Notifications from "./components/notifications/Notifications";

const {store, persistor} = configureStore()
// createStore(counter);

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
        <Notifications />
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );

render();
store.subscribe(render);
