import * as React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import configureStore from "./configureStore";
import ComponentA from "./a/ComponentA";
import ComponentB from "./b/ComponentB";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <Link to="/a">Feature A</Link>
          &nbsp;-&nbsp;
          <Link to="/b">Feature B</Link>
        </nav>
        <Switch>
          <Route path="/a" component={ComponentA} />
          <Route path="/b" component={ComponentB} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
