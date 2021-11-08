import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { Container } from "./components/counter/container";

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
