import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import alertReducer from "./store/alert.reducer";
import mapToAlertActions from "./store/alert.actions";

const store = createStore(alertReducer);
const Container = connect(
  state => state,
  mapToAlertActions
)(state => <App state={state} />);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
