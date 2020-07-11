import { combineReducers, createStore } from "redux";
import reducerA, { IDataA } from "./a/reducerA";
import reducerB, { IDataB } from "./b/reducerB";

export interface IStore {
  a: IDataA;
  b: IDataB;
}

const configureStore = () => {
  return createStore(
    combineReducers({
      a: reducerA,
      b: reducerB,
    })
  );
};

export default configureStore;
