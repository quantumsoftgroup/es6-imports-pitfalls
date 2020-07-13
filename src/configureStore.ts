import { combineReducers, createStore } from "redux";
import reducerA from "./a/reducerA";
import reducerB from "./b/reducerB";

const configureStore = () => {
  return createStore(
    combineReducers({
      a: reducerA,
      b: reducerB,
    })
  );
};

export default configureStore;
