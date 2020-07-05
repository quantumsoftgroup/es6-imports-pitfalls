import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import configureStore from "./configureStore";
import FeatureA from "./a/FeatureA";
import FeatureB from "./b/FeatureB";
import FeatureC from "./c/FeatureC";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/a" component={FeatureA} />
        <Route path="/b" component={FeatureB} />
        <Route path="/c" component={FeatureC} />
        {/* ... more routes ...*/}
      </Switch>
    </Provider>
  );
};

export default App;
