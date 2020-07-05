import * as React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import configureStore from "./configureStore";
import FeatureA from "./a/FeatureA";
import FeatureB from "./b/FeatureB";

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
          <Route path="/a" component={FeatureA} />
          <Route path="/b" component={FeatureB} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
