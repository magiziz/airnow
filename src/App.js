import React from "react";
import AppView from "./views/AppView";
import { Provider } from "react-redux";
import store from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
};

export default App;
